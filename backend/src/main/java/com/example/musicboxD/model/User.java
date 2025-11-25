package com.example.musicboxD.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;
import java.util.List;


@Entity

@Getter
@Setter


@NoArgsConstructor
@AllArgsConstructor

@Table(name = "User_musicboxd")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    private String userName;
    private String email;
    private String password;
    private String bio;

    @OneToMany(mappedBy = "user") // mapped by evita criar uma nova chave estrangeira, pegando a chave q já foi mapeada na review
    private List<Review> review;

    @OneToMany(mappedBy = "user")
    private List<Playlist> userPlaylist;
    
}
