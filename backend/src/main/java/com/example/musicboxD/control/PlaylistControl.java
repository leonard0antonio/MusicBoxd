package com.example.musicboxD.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.musicboxD.dto.PlaylistRecordDto;
import com.example.musicboxD.model.Playlist;
import com.example.musicboxD.service.PlaylistService;

import jakarta.validation.Valid;

@RestController
public class PlaylistControl {

    @Autowired
    PlaylistService playlistService;

    @PostMapping("/playlists")
    public ResponseEntity<Playlist> savePlaylist(@RequestBody @Valid PlaylistRecordDto playlistRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(playlistService.savePlaylist(playlistRecordDto));
    }

    @GetMapping("/playlists")
    public ResponseEntity<List<Playlist>> getAllPlaylists() {
        return ResponseEntity.status(HttpStatus.OK).body(playlistService.getAllPlaylists());
    }

    @GetMapping("/playlists/{id}")
    public ResponseEntity<Playlist> getOnePlaylist(@PathVariable(value = "id") Long playlistID) {
        return ResponseEntity.status(HttpStatus.OK).body(playlistService.getOnePlaylist(playlistID));
    }

    @PutMapping("/playlists/{id}")
    public ResponseEntity<Playlist> updatePlaylist(@PathVariable(value = "id") Long playlistID,
                                                   @RequestBody @Valid PlaylistRecordDto playlistRecordDto) {
        return ResponseEntity.status(HttpStatus.OK).body(playlistService.updatePlaylist(playlistID, playlistRecordDto));
    }

    @DeleteMapping("/playlists/{id}")
    public ResponseEntity<String> deletePlaylist(@PathVariable(value = "id") Long id) {
        playlistService.deletePlaylist(id);
        return ResponseEntity.status(HttpStatus.OK).body("Playlist deleted successfully");
    }
}