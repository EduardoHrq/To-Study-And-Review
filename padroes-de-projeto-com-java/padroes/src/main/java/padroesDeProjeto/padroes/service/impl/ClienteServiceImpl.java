package padroesDeProjeto.padroes.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import padroesDeProjeto.padroes.model.Cliente;
import padroesDeProjeto.padroes.model.ClienteRepo;
import padroesDeProjeto.padroes.model.Endereco;
import padroesDeProjeto.padroes.model.EnderecoRepo;
import padroesDeProjeto.padroes.service.ClienteService;
import padroesDeProjeto.padroes.service.ViaCepService;

public class ClienteServiceImpl implements ClienteService {

  @Autowired
  private ClienteRepo clienteQuery;

  @Autowired
  private EnderecoRepo enderecoQuery;

  @Autowired
  private ViaCepService viacep;

  @Override
  public Iterable<Cliente> buscar() {
    return this.clienteQuery.findAll();
  }

  @Override
  public Cliente buscarPorId(Long id) {
    return this.clienteQuery.findById(id).get();
  }

  @Override
  public void inserir(Cliente cliente) {
    createCliente(cliente);
  }

  private void createCliente(Cliente cliente) {
    String cep = cliente.getEndereco().getCep();
    var endereco = this.enderecoQuery.findById(cep).orElseGet(() -> {
      Endereco newEndereco = viacep.consultarCep(cep);
      this.enderecoQuery.save(newEndereco);
      return null;
    });

    cliente.setEndereco(endereco);

    this.clienteQuery.save(cliente);
  }

  @Override
  public void atualizar(Long id, Cliente cliente) {
    var foundCliente = this.clienteQuery.findById(id);

    if(foundCliente.isPresent()) {
      createCliente(cliente);
    }

  }

  @Override
  public void deletar(Long id) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'deletar'");
  } 
  

}
