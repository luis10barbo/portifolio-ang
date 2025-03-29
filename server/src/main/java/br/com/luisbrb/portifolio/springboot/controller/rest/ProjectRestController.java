package br.com.luisbrb.portifolio.springboot.controller.rest;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.luisbrb.portifolio.springboot.controller.repositories.ProjectRepository;
import br.com.luisbrb.portifolio.springboot.controller.repositories.SkillRepository;
import br.com.luisbrb.portifolio.springboot.model.ProjectStatusEnum;
import br.com.luisbrb.portifolio.springboot.model.entities.ProjectEntity;
import br.com.luisbrb.portifolio.springboot.model.entities.SkillEntity;
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.ToString;

@RestController
@RequestMapping("/projects")
public class ProjectRestController {
    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    public ProjectRestController(ProjectRepository projectRepository, SkillRepository skillRepository) {
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
    }

    @GetMapping()
    Iterable<ProjectEntity> getAll() {
        return projectRepository.findAll();
    }

    @Getter
    @ToString
    public static class BodySaveProject {
        private @NotNull String name;
        private String description;
        private String repo;
        private String website;
        private String download;
        private List<SkillEntity> techBack;
        private List<SkillEntity> techFront;
        private ProjectStatusEnum projectStatusEnum;
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