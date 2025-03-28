package br.com.luisbrb.portifolio.springboot.model.entities;

import jakarta.persistence.Basic;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

public class ImageEntity {
    private @Id @GeneratedValue Long id;
    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] profilePicture;
}
