package estoquePreco.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class EstoqueDTO implements Serializable{ // serializable tranforma em bytes e permite recuperar a classe
  
  private String codProduct;
  private int amount;

}
