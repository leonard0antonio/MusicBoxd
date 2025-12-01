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

import com.example.musicboxD.dto.PlaylistRecordDto;
import com.example.musicboxD.exception.PlaylistNotFoundException;
import com.example.musicboxD.model.Playlist;
import com.example.musicboxD.repository.PlaylistRepository;

@ExtendWith(MockitoExtension.class)
class PlaylistServiceTest {

    @Mock
    private PlaylistRepository playlistRepository;

    @InjectMocks
    private PlaylistService playlistService;

    @Test
    @DisplayName("Should save playlist successfully")
    void shouldSavePlaylistSuccessfully() {
        PlaylistRecordDto dto = new PlaylistRecordDto(List.of("Music 1", "Music 2"), "My Playlist");
        Playlist playlist = new Playlist(1L, "My Playlist", List.of("Music 1", "Music 2"), null);
        when(playlistRepository.save(any(Playlist.class))).thenReturn(playlist);
        Playlist savedPlaylist = playlistService.savePlaylist(dto);
        assertNotNull(savedPlaylist);
        assertEquals("My Playlist", savedPlaylist.getPlaylistName());
        assertEquals(2, savedPlaylist.getUserPlaylist().size());
        verify(playlistRepository, times(1)).save(any(Playlist.class));
    }

    @Test
    @DisplayName("Should return all playlists")
    void shouldReturnAllPlaylists() {
        List<Playlist> playlists = List.of(new Playlist(), new Playlist());
        when(playlistRepository.findAll()).thenReturn(playlists);
        List<Playlist> result = playlistService.getAllPlaylists();
        assertEquals(2, result.size());
    }

    @Test
    @DisplayName("Should find playlists by ID")
    void shouldFindPlaylistById() {
        Long id = 1L;
        Playlist playlist = new Playlist();
        playlist.setPlaylistID(id);
        when(playlistRepository.findById(id)).thenReturn(Optional.of(playlist));
        Playlist result = playlistService.getOnePlaylist(id);
        assertEquals(id, result.getPlaylistID());
    }

    @Test
    @DisplayName("Should throw exception when not finding playlist")
    void shouldThrowExceptionWhenPlaylistNotFound() {
        Long id = 99L;
        when(playlistRepository.findById(id)).thenReturn(Optional.empty());
        PlaylistNotFoundException thrown = assertThrows(PlaylistNotFoundException.class, () -> playlistService.getOnePlaylist(id));
        assertNotNull(thrown.getMessage());
    }

    @Test
    @DisplayName("Should update playlist successfully")
    void shouldUpdatePlaylistSuccessfully() {
        Long id = 1L;
        Playlist existingPlaylist = new Playlist(id, "Old Name", List.of("A"), null);
        PlaylistRecordDto updateDto = new PlaylistRecordDto(List.of("A", "B"), "New Name");
        when(playlistRepository.findById(id)).thenReturn(Optional.of(existingPlaylist));
        when(playlistRepository.save(any(Playlist.class))).thenAnswer(i -> i.getArgument(0));
        Playlist updatedPlaylist = playlistService.updatePlaylist(id, updateDto);
        assertEquals("New Name", updatedPlaylist.getPlaylistName());
        assertEquals(2, updatedPlaylist.getUserPlaylist().size());
    }

    @Test
    @DisplayName("Should delete playlist successfully")
    void shouldDeletePlaylistSuccessfully() {
        Long id = 1L;
        Playlist playlist = new Playlist();
        playlist.setPlaylistID(id);
        when(playlistRepository.findById(id)).thenReturn(Optional.of(playlist));
        assertDoesNotThrow(() -> playlistService.deletePlaylist(id));
        verify(playlistRepository, times(1)).delete(playlist);
    }

    @Test
    @DisplayName("Should throw exception when updating non-existent playlist")
    void shouldThrowExceptionWhenUpdatingNonExistentPlaylist() {
        Long id = 99L;
        PlaylistRecordDto updateDto = new PlaylistRecordDto(List.of("A"), "New Name");
        when(playlistRepository.findById(id)).thenReturn(Optional.empty());
        PlaylistNotFoundException exception = assertThrows(PlaylistNotFoundException.class, 
            () -> playlistService.updatePlaylist(id, updateDto));
        assertNotNull(exception.getMessage()); 
        verify(playlistRepository, times(0)).save(any(Playlist.class));
    }

    @Test
    @DisplayName("Should throw exception when deleting non-existent playlist")
    void shouldThrowExceptionWhenDeletingNonExistentPlaylist() {
        Long id = 99L;
        when(playlistRepository.findById(id)).thenReturn(Optional.empty());
        PlaylistNotFoundException exception = assertThrows(PlaylistNotFoundException.class, 
            () -> playlistService.deletePlaylist(id));
        assertNotNull(exception.getMessage());
        verify(playlistRepository, times(0)).delete(any(Playlist.class));
    }
}