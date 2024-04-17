package com.security.model.use_case;

import com.security.model.DTO.UsuarioDTO;
import com.security.provider.CreateJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Classe de serviço, ação de quando o usuario for realizar o login
 *
 * , criação do token
 * */
@Service
public class LoginUsuario {

    //Buscar valor no aplication properties
    @Value("${security.token.secret}")
    private String secret;

    @Autowired
    private CreateJWT creatorJWT;

    public String execute(UsuarioDTO usuario) {
        // Vereficar se usuario existe no banco de dados

//         Verificar senha

//        Criar o JWT

   /*     Algorithm alg = Algorithm.HMAC256(secret); //definido no aplication properties
        var token = JWT.create().withIssuer("NomeDaEmpresa_Emissor")
                .withExpiresAt(Instant.now().plus(Duration.ofHours(2)))
                .withSubject("InformaçãoQueVaiNoToken = " + usuario.getUsername())
                .sign(alg);*/

        return creatorJWT.create(secret, usuario.getUsername());
    }

}
