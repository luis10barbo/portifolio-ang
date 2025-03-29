package br.com.luisbrb.portifolio.springboot.controller.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
    public List<ImageEntity> save(@RequestPart("image") MultipartFile[] formData) throws IOException {
        List<ImageEntity> imageList = new ArrayList<>();
        for (MultipartFile image : formData) {
            imageList.add(new ImageEntity(null, image.getBytes()));
        }
        return imageRepository.saveAll(imageList);
    }

    @GetMapping(path="", produces = MediaType.IMAGE_JPEG_VALUE) 
    public ResponseEntity<?> get(@RequestParam("id") Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().build();
        }

        Optional<ImageEntity> image = imageRepository.findById(id);
        if (image.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(image.get().getImage());
    }
}
