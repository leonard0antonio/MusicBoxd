package com.example.musicboxD.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;


@Entity

@Getter
@Setter


@NoArgsConstructor
@AllArgsConstructor


public class Playlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playlistID;
    private String playlistName;
    private List<String> userPlaylist;

    @ManyToOne
    @JoinColumn(name="user_id", referencedColumnName = "userID")
    private User user;

}
