package com.security.controller;

import com.security.model.DTO.UsuarioDTO;
import com.security.model.use_case.LoginUsuario;
import com.security.provider.VerifyJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class Controller {

    @Autowired
    private LoginUsuario useCaseLogin;

    @Autowired
    private VerifyJWT valitade;

    /**
     * <h2>Simulação de login e criação do token</h2>
     * @url localhost:8080/login
     * @body JSON {"username": "exUsername", "password": "exPassword"}
     * */
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UsuarioDTO usuario) {
        System.out.println(usuario.getUsername());
        return ResponseEntity.ok().body(this.useCaseLogin.execute(usuario));
    }

    /**
     * <h2>Validação do token criado</h2>
     * @Description Se correto, visualização do subject (username)
     * @url localhost:8080/verifyToken
     * @Header Key = Authorization; Value = {tokenCriado}
     * */
    @GetMapping("/verifyToken")
    public ResponseEntity<String> verifyToken(@RequestHeader("Authorization") String token) {
        System.out.println(token);
        return ResponseEntity.ok(this.valitade.verifyToken(token));
    }

}
