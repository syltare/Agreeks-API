
package com.AgreeingUp.Agreeks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.AgreeingUp.Agreeks.model.Resposta;
import com.AgreeingUp.Agreeks.repository.RespostaRepository;

@RestController
@RequestMapping("/respostas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RespostaController {
	
	@Autowired
	private RespostaRepository repository;

	@GetMapping
	public ResponseEntity<List<Resposta>> getAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Resposta> getById(@PathVariable int id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/resposta/{resposta}")
	public ResponseEntity<List<Resposta>> getByResposta(@PathVariable String resposta) {
		return ResponseEntity.ok(repository.findAllByRespostaContainingIgnoreCase(resposta));

	}



	@PutMapping
	public ResponseEntity<Resposta> put (@RequestBody Resposta resposta) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(resposta)); 
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	@PostMapping
	public ResponseEntity<Resposta> post(@RequestBody Resposta resposta) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(resposta));
	}
}

