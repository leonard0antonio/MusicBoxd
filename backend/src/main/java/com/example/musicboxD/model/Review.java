package com.example.musicboxD.model;

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

public class Review{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewID;

    private String reviewTitle;
    private String review;
    private int reviewLikeQuantity;
    private int replyQuantity;

    private String imageUrl; //

    @ManyToOne
    @JoinColumn(name="user_id", referencedColumnName = "userID")
    private User user;
}