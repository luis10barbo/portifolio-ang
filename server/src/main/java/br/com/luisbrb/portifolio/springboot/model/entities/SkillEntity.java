package br.com.luisbrb.portifolio.springboot.model.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import br.com.luisbrb.portifolio.springboot.model.SkillCategory;
import br.com.luisbrb.portifolio.springboot.model.TechnologyTypeEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Valid
public class SkillEntity implements Serializable {
    private @Id @GeneratedValue Long id;
    private @NotNull @Column(nullable = false) String name;
    private @OneToOne(targetEntity = ImageEntity.class) ImageEntity img;
    private SkillCategory category;
    private TechnologyTypeEnum type;
}
