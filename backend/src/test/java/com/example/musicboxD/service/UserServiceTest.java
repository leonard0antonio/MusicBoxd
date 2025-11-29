package com.example.musicboxD.service;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.musicboxD.dto.UserRecordDto;
import com.example.musicboxD.exception.UserNotFoundException;
import com.example.musicboxD.model.User;
import com.example.musicboxD.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    @DisplayName("Deve salvar usuário com sucesso")
    void shouldSaveUserSuccessfully() {
        UserRecordDto dto = new UserRecordDto("John Doe", "Bio test", "john@email.com", "M", "12345");
        User userEntity = new User();
        userEntity.setUserID(1L);
        userEntity.setUserName("John Doe");

        when(userRepository.save(any(User.class))).thenReturn(userEntity);

        User savedUser = userService.saveUser(dto);

        assertNotNull(savedUser);
        assertEquals(1L, savedUser.getUserID());
        assertEquals("John Doe", savedUser.getUserName());
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    @DisplayName("Deve listar todos os usuários")
    void shouldReturnAllUsers() {
        List<User> users = List.of(new User(), new User());
        when(userRepository.findAll()).thenReturn(users);

        List<User> result = userService.getAllUsers();

        assertEquals(2, result.size());
    }

    @Test
    @DisplayName("Deve encontrar usuário por ID")
    void shouldFindUserById() {
        Long id = 1L;
        User user = new User();
        user.setUserID(id);
        
        when(userRepository.findById(id)).thenReturn(Optional.of(user));

        User result = userService.getOneUser(id);

        assertEquals(id, result.getUserID());
    }

    @Test
    @DisplayName("Deve lançar exceção ao buscar ID inexistente")
    void shouldThrowExceptionWhenUserNotFound() {
        Long id = 99L;
        when(userRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.getOneUser(id));
    }

    @Test
    @DisplayName("Deve atualizar usuário com sucesso")
    void shouldUpdateUserSuccessfully() {
        Long id = 1L;
        User existingUser = new User();
        existingUser.setUserID(id);
        existingUser.setUserName("Old Name");

        UserRecordDto dto = new UserRecordDto("New Name", "New Bio", "new@email.com", "F", "pass");

        when(userRepository.findById(id)).thenReturn(Optional.of(existingUser));
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArgument(0));

        User updatedUser = userService.updateUser(id, dto);

        assertEquals("New Name", updatedUser.getUserName());
        assertEquals("New Bio", updatedUser.getBio());
    }

    @Test
    @DisplayName("Deve lançar erro ao atualizar usuário inexistente")
    void shouldThrowErrorUpdatingNonExistentUser() {
        Long id = 99L;
        UserRecordDto dto = new UserRecordDto("Name", "Bio", "email", "M", "pass");
        
        when(userRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.updateUser(id, dto));
        verify(userRepository, never()).save(any());
    }

    @Test
    @DisplayName("Deve deletar usuário com sucesso")
    void shouldDeleteUserSuccessfully() {
        Long id = 1L;
        User user = new User();
        user.setUserID(id);

        when(userRepository.findById(id)).thenReturn(Optional.of(user));

        assertDoesNotThrow(() -> userService.deleteOneUser(id));
        verify(userRepository, times(1)).delete(user);
    }

    @Test
    @DisplayName("Deve lançar erro ao deletar usuário inexistente")
    void shouldThrowErrorDeletingNonExistentUser() {
        Long id = 99L;
        when(userRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.deleteOneUser(id));
        verify(userRepository, never()).delete(any());
    }
}