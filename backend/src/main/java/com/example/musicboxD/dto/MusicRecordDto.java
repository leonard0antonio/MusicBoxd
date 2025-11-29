package com.example.musicboxD.dto;

import jakarta.validation.constraints.NotBlank;

public record MusicRecordDto(@NotBlank String songName, @NotBlank String artist, @NotBlank String genre, @NotBlank String album) {
}