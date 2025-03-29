package br.com.luisbrb.portifolio.springboot.model.entities;

import java.io.Serializable;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Valid
public class ImageEntity implements Serializable {
    private @Id @GeneratedValue Long id;
    @Lob
    @Basic(fetch = FetchType.LAZY)
    private @NotEmpty @Column(nullable = false) String picture;
}
