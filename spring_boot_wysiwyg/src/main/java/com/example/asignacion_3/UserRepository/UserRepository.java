package com.example.asignacion_3.UserRepository;

import java.util.Optional;

import com.example.asignacion_3.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
}
