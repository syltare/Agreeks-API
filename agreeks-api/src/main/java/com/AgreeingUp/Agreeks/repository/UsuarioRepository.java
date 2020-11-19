package com.AgreeingUp.Agreeks.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AgreeingUp.Agreeks.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	public Optional<Usuario> findByEmail(String email);

}
