package com.AgreeingUp.Agreeks.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AgreeingUp.Agreeks.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
	public List<Categoria> findAllByDescricaoContainingIgnoreCase(String descricao);
}
