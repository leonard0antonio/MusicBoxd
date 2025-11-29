package com.example.musicboxD.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.musicboxD.dto.MusicRecordDto;
import com.example.musicboxD.exception.MusicNotFoundException;
import com.example.musicboxD.model.Music;
import com.example.musicboxD.repository.MusicRepository;

@Service
public class MusicService {

    private final MusicRepository musicRepository;

    public MusicService(MusicRepository musicRepository) {
        this.musicRepository = musicRepository;
    }

    @Transactional
    public Music saveMusic(MusicRecordDto musicRecordDto) {
        Music music = new Music();
        music.setSongName(musicRecordDto.songName());
        music.setArtist(musicRecordDto.artist());
        music.setGenre(musicRecordDto.genre());
        music.setAlbum(musicRecordDto.album());
        
        return musicRepository.save(music);
    }

    public List<Music> getAllMusics() {
        return musicRepository.findAll();
    }

    public Music getOneMusic(Long id) {
        return musicRepository.findById(id)
                .orElseThrow(() -> new MusicNotFoundException(id));
    }

    @Transactional
    public Music updateMusic(Long id, MusicRecordDto musicRecordDto) {
        Music music = getOneMusic(id);
        
        music.setSongName(musicRecordDto.songName());
        music.setArtist(musicRecordDto.artist());
        music.setGenre(musicRecordDto.genre());
        music.setAlbum(musicRecordDto.album());
        
        return musicRepository.save(music);
    }

    @Transactional
    public void deleteOneMusic(Long id) {
        Music music = getOneMusic(id);
        musicRepository.delete(music);
    }
}