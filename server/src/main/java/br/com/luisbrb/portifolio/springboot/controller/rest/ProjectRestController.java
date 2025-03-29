package br.com.luisbrb.portifolio.springboot.controller.rest;

import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.luisbrb.portifolio.springboot.controller.repositories.ProjectRepository;
import br.com.luisbrb.portifolio.springboot.controller.repositories.SkillRepository;
import br.com.luisbrb.portifolio.springboot.model.entities.ProjectEntity;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/project")
public class ProjectRestController {
    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    public ProjectRestController(ProjectRepository projectRepository, SkillRepository skillRepository) {
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
    }

    @GetMapping("/all")
    Iterable<ProjectEntity> getAll() {
        return projectRepository.findAll();
    }

    @GetMapping("/")
    Optional<ProjectEntity> get(@RequestParam("id") Long id) {
        return this.projectRepository.findById(id);
    }

    @PostMapping()
    public ProjectEntity save(@RequestBody ProjectEntity entity) {
        System.out.println(entity.toString());
        entity.setId(null);
        if (!entity.getTechBack().isEmpty()) {
            entity.getTechBack().forEach(skillTech -> {
                boolean exists = skillRepository.existsById(skillTech.getId());
                if (!exists) {
                    skillRepository.save(skillTech);
                }
            });
        }
        if (!entity.getTechBack().isEmpty()) {
            entity.getTechBack().forEach(skillTech -> {
                boolean exists = skillRepository.existsById(skillTech.getId());
                if (!exists) {
                    skillRepository.save(skillTech);
                }
            });
        }
        return projectRepository.save(entity);
        // repository.save(new ProjectEntity(null, entity.name, entity.description, entity.repo, entity.website, entity.download, null, null, null, null));
    }
}