package estoquePreco.controller;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import estoquePreco.constantes.RabbitConstantes;
import estoquePreco.dto.PrecoDTO;
import estoquePreco.service.RabbitServiceProducer;

@RestController
@RequestMapping("/preco")
public class PrecoController {
  
  @Autowired private RabbitServiceProducer service;
  @Autowired private AmqpTemplate amqp;


  @PutMapping
  public ResponseEntity<String> alterarPreco(@RequestBody PrecoDTO preco) {
    this.service.sendMessage(RabbitConstantes.QUEUE_PRECO, preco);
    return ResponseEntity.ok().body("ok");
  }

  @GetMapping("view")
  public ResponseEntity<Message> getEstoque() {
      return ResponseEntity.ok().body(this.amqp.receive(RabbitConstantes.QUEUE_PRECO));
  }

}
