package com.example.musicboxD.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.musicboxD.dto.UserRecordDto;
import com.example.musicboxD.exception.UserNotFoundException;
import com.example.musicboxD.model.User;
import com.example.musicboxD.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public User saveUser(UserRecordDto userRecordDto) {
        User user = new User();
        user.setUserName(userRecordDto.name());
        user.setBio(userRecordDto.bio());
        user.setEmail(userRecordDto.email());
        user.setPassword(userRecordDto.password());
        
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getOneUser(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @Transactional
    public User updateUser(Long id, UserRecordDto userRecordDto) {
        User user = getOneUser(id);
        user.setUserName(userRecordDto.name());
        user.setBio(userRecordDto.bio());
        user.setEmail(userRecordDto.email());
        user.setPassword(userRecordDto.password());
        
        return userRepository.save(user);
    }

    @Transactional
    public void deleteOneUser(Long id) {
        User user = getOneUser(id);
        userRepository.delete(user);
    }
}