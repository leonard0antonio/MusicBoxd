package com.example.musicboxD.service;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.musicboxD.dto.MusicRecordDto;
import com.example.musicboxD.exception.MusicNotFoundException;
import com.example.musicboxD.model.Music;
import com.example.musicboxD.repository.MusicRepository;

@ExtendWith(MockitoExtension.class)
class MusicServiceTest {

    @Mock
    private MusicRepository musicRepository;

    @InjectMocks
    private MusicService musicService;

    @Test
    @DisplayName("Deve salvar música com sucesso")
    void shouldSaveMusicSuccessfully() {
        // Arrange
        MusicRecordDto dto = new MusicRecordDto("Song 1", "Artist 1", "Rock", "Album 1");
        Music music = new Music(1L, "Song 1", "Artist 1", "Rock", "Album 1");
        
        when(musicRepository.save(any(Music.class))).thenReturn(music);

        // Act
        Music savedMusic = musicService.saveMusic(dto);

        // Assert
        assertNotNull(savedMusic);
        assertEquals("Song 1", savedMusic.getSongName());
        assertEquals("Artist 1", savedMusic.getArtist());
        verify(musicRepository, times(1)).save(any(Music.class));
    }

    @Test
    @DisplayName("Deve retornar todas as músicas")
    void shouldReturnAllMusics() {
        List<Music> musics = List.of(new Music(), new Music());
        when(musicRepository.findAll()).thenReturn(musics);

        List<Music> result = musicService.getAllMusics();

        assertEquals(2, result.size());
    }

    @Test
    @DisplayName("Deve encontrar música por ID")
    void shouldFindMusicById() {
        Long id = 1L;
        Music music = new Music();
        music.setMusicID(id);
        
        when(musicRepository.findById(id)).thenReturn(Optional.of(music));

        Music result = musicService.getOneMusic(id);

        assertEquals(id, result.getMusicID());
    }

    @Test
    @DisplayName("Deve lançar exceção ao não encontrar música")
    void shouldThrowExceptionWhenMusicNotFound() {
        Long id = 99L;
        when(musicRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(MusicNotFoundException.class, () -> musicService.getOneMusic(id));
    }

    @Test
    @DisplayName("Deve atualizar música com sucesso")
    void shouldUpdateMusicSuccessfully() {
        Long id = 1L;
        Music existingMusic = new Music(id, "Old Song", "Old Artist", "Old Genre", "Old Album");
        MusicRecordDto updateDto = new MusicRecordDto("New Song", "New Artist", "New Genre", "New Album");

        when(musicRepository.findById(id)).thenReturn(Optional.of(existingMusic));
        when(musicRepository.save(any(Music.class))).thenAnswer(i -> i.getArgument(0));

        Music updatedMusic = musicService.updateMusic(id, updateDto);

        assertEquals("New Song", updatedMusic.getSongName());
        assertEquals("New Artist", updatedMusic.getArtist());
    }

    @Test
    @DisplayName("Deve deletar música com sucesso")
    void shouldDeleteMusicSuccessfully() {
        Long id = 1L;
        Music music = new Music();
        music.setMusicID(id);

        when(musicRepository.findById(id)).thenReturn(Optional.of(music));

        assertDoesNotThrow(() -> musicService.deleteOneMusic(id));
        verify(musicRepository, times(1)).delete(music);
    }
}