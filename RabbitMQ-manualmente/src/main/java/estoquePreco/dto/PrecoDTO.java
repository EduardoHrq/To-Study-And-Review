package estoquePreco.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class PrecoDTO implements Serializable {
  
  private String codProduct;
  private int preco;

}
