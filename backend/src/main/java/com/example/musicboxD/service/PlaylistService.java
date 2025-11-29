package com.example.musicboxD.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.musicboxD.dto.PlaylistRecordDto;
import com.example.musicboxD.exception.PlaylistNotFoundException;
import com.example.musicboxD.model.Playlist;
import com.example.musicboxD.repository.PlaylistRepository;

@Service
public class PlaylistService {

    private final PlaylistRepository playlistRepository;

    public PlaylistService(PlaylistRepository playlistRepository) {
        this.playlistRepository = playlistRepository;
    }

    @Transactional
    public Playlist savePlaylist(PlaylistRecordDto playlistRecordDto) {
        Playlist playlist = new Playlist();
        playlist.setPlaylistName(playlistRecordDto.playlistName());
        playlist.setUserPlaylist(playlistRecordDto.userPlaylist());
        
        return playlistRepository.save(playlist);
    }

    public List<Playlist> getAllPlaylists() {
        return playlistRepository.findAll();
    }

    public Playlist getOnePlaylist(Long id) {
        return playlistRepository.findById(id)
                .orElseThrow(() -> new PlaylistNotFoundException(id));
    }

    @Transactional
    public Playlist updatePlaylist(Long id, PlaylistRecordDto playlistRecordDto) {
        Playlist playlist = getOnePlaylist(id);       
        playlist.setPlaylistName(playlistRecordDto.playlistName());
        playlist.setUserPlaylist(playlistRecordDto.userPlaylist());
        
        return playlistRepository.save(playlist);
    }

    @Transactional
    public void deletePlaylist(Long id) {
        Playlist playlist = getOnePlaylist(id);
        playlistRepository.delete(playlist);
    }
}