package br.com.luisbrb.portifolio.springboot.controller.rest;

import java.io.IOException;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.luisbrb.portifolio.springboot.controller.repositories.ImageRepository;
import br.com.luisbrb.portifolio.springboot.model.entities.ImageEntity;

@RestController
@RequestMapping("/image")
public class ImageRestController {
    
    private ImageRepository imageRepository;

    public ImageRestController(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }
    
    @PostMapping(path = "", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ImageEntity save(@RequestPart(value = "file") MultipartFile image) throws IOException {
        return imageRepository.save(new ImageEntity(null, image.getBytes().toString()));
    }
}
