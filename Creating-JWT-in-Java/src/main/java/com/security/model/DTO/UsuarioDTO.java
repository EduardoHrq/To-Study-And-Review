package com.security.model.DTO;

/**
 * <h1>Data transfer object</h1>
 * usado no caso de uso do login, para facilitar,
 * encapsular e usar somente atributos necessarios
 * */
public class UsuarioDTO {

    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
