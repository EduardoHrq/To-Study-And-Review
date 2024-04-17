package com.security.provider;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


/**
 * <h2>Serviço para validar do JWT</h2>
 * */
@Service
public class VerifyJWT {

   @Value("${security.token.secret}")
   private String secretKey;

   public String verifyToken(String token) {
      Algorithm alg = Algorithm.HMAC256(secretKey);

      System.out.println("Ver : " + token);

      try {
        var subject = JWT.require(alg)
            .build()
            .verify(token)
            .getSubject();
         System.out.println(subject);
         return subject;
      } catch (JWTVerificationException e) {
         e.printStackTrace();
         return "";
      }
   }

}
