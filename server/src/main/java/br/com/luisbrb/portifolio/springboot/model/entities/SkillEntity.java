package br.com.luisbrb.portifolio.springboot.model.entities;

import br.com.luisbrb.portifolio.springboot.model.SkillCategory;
import br.com.luisbrb.portifolio.springboot.model.TechnologyTypeEnum;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
public class SkillEntity {
    private @Id @GeneratedValue Long id;
    private @Nonnull String name;
    private String img;
    private SkillCategory category;
    private TechnologyTypeEnum type;
}
