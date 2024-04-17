package com.security.provider;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.Map;

/**
 * <h2>Serviço para criação do JWT</h2>
 * */
@Service
public class CreateJWT {

   public String create(String secretKey, String subject) {
      Algorithm alg = Algorithm.HMAC256(secretKey);

      return JWT.create().withIssuer("MyToken")
         .withExpiresAt(Instant.now().plus(Duration.ofHours(2)))
         .withSubject(subject)
         .withPayload(Map.of("nome","Eduardo"))
         .sign(alg);

   }

}
