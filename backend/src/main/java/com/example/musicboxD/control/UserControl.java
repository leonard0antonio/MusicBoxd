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

import com.example.musicboxD.dto.UserRecordDto;
import com.example.musicboxD.model.User;
import com.example.musicboxD.service.UserService;

import jakarta.validation.Valid;

@RestController
public class UserControl {

    @Autowired
    UserService userService;

    @PostMapping("/users")
    public ResponseEntity<User> saveUser(@RequestBody @Valid UserRecordDto userRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveUser(userRecordDto));
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getOneUser(@PathVariable(value = "id") Long userID) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getOneUser(userID));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userID,
                                             @RequestBody @Valid UserRecordDto userRecordDto) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(userID, userRecordDto));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteOneUser(@PathVariable(value = "id") Long userID) {
        userService.deleteOneUser(userID);
        return ResponseEntity.status(HttpStatus.OK).body("User is deleted successfully");
    }
}