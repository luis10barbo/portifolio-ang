package br.com.luisbrb.portifolio.springboot.controller.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.luisbrb.portifolio.springboot.controller.AuthenticationUtils;
import br.com.luisbrb.portifolio.springboot.controller.repositories.SkillRepository;
import br.com.luisbrb.portifolio.springboot.model.Constants;
import br.com.luisbrb.portifolio.springboot.model.entities.SkillEntity;

@RestController
@RequestMapping("/skill")
public class SkillRestController {
    private SkillRepository skillRepository;
    public SkillRestController(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    @PostMapping("/")
    public SkillEntity save(@CookieValue(name = Constants.AUTH_COOKIE) String authCookie, @RequestBody SkillEntity skillEntity) {
        if (!AuthenticationUtils.isLoggedIn(authCookie)) {
            return null;
        };
        return skillRepository.save(skillEntity);
    }

    @GetMapping("/all")
    public List<SkillEntity> getAll() {
        return skillRepository.findAll();
    }
}
