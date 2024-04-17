package backendRabbit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backendRabbit.dto.PagamentoDTO;
import backendRabbit.facade.PagamentoFacade;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/pagamento")
public class Pagamento {

  @Autowired
  private PagamentoFacade facade;

  @PostMapping
  public ResponseEntity<String> processar(@RequestBody PagamentoDTO request) {

    return ResponseEntity.ok().body(this.facade.solicitarPagamento(request));
  }

}
