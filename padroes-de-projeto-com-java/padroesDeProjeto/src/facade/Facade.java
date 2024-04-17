package facade;

import subsystem1.Crm;
import subsystem2.CepApi;

public class Facade {
  
  public void migrarCliente(String nome, String cep) {
    String cidade = CepApi.getInstancia().recuperarCidade(cep);
		String estado = CepApi.getInstancia().recuperarEstado(cep);
		
		Crm.gravarCliente(nome, cep, cidade, estado);
  }

}
