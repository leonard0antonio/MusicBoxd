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

import com.example.musicboxD.dto.MusicRecordDto;
import com.example.musicboxD.model.Music;
import com.example.musicboxD.service.MusicService;

import jakarta.validation.Valid;

@RestController
public class MusicControl {

    @Autowired
    MusicService musicService;

    @PostMapping("/musics")
    public ResponseEntity<Music> saveMusic(@RequestBody @Valid MusicRecordDto musicRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(musicService.saveMusic(musicRecordDto));
    }

    @GetMapping("/musics")
    public ResponseEntity<List<Music>> getAllMusics() {
        return ResponseEntity.status(HttpStatus.OK).body(musicService.getAllMusics());
    }

    @GetMapping("/musics/{id}")
    public ResponseEntity<Music> getOneMusic(@PathVariable(value = "id") Long musicID) {
        return ResponseEntity.status(HttpStatus.OK).body(musicService.getOneMusic(musicID));
    }

    @PutMapping("/musics/{id}")
    public ResponseEntity<Music> updateMusic(@PathVariable(value = "id") Long musicID,
                                             @RequestBody @Valid MusicRecordDto musicRecordDto) {
        return ResponseEntity.status(HttpStatus.OK).body(musicService.updateMusic(musicID, musicRecordDto));
    }

    @DeleteMapping("/musics/{id}")
    public ResponseEntity<String> deleteOneMusic(@PathVariable(value = "id") Long musicID) {
        musicService.deleteOneMusic(musicID);
        return ResponseEntity.status(HttpStatus.OK).body("música deletada com sucesso!");
    }
}