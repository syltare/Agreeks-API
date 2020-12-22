package com.AgreeingUp.Agreeks.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AgreeingUp.Agreeks.model.Resposta;
@Repository
public interface RespostaRepository  extends JpaRepository<Resposta,Integer>{

	public List<Resposta>findAllByRespostaContainingIgnoreCase(String resposta);
	
	
}
