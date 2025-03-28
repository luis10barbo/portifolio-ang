package br.com.luisbrb.portifolio.springboot.controller.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.luisbrb.portifolio.springboot.controller.repositories.ProjectRepository;
import br.com.luisbrb.portifolio.springboot.model.entities.ProjectEntity;

@RestController
public class ProjectRestController {
    private final ProjectRepository repository;

    public ProjectRestController(ProjectRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/projects")
    Iterable<ProjectEntity> getAll() {
        return repository.findAll();
    }
}