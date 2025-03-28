package br.com.luisbrb.portifolio.springboot.model.entities;

import java.util.List;

import br.com.luisbrb.portifolio.springboot.model.ProjectStatusEnum;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
public class ProjectEntity {
    private @Id @GeneratedValue Long id;
    private @Nonnull String name;
    private String description;
    private String repo;
    private String website;
    private String download;
    private @Nonnull ProjectStatusEnum status;
    private @OneToMany(targetEntity = SkillEntity.class, mappedBy = "techFront") List<SkillEntity> techFront;
    private @OneToMany(targetEntity = SkillEntity.class, mappedBy = "techBack") List<SkillEntity> techBack;
    private @OneToMany(targetEntity = ImageEntity.class) List<ImageEntity> images; 
}
