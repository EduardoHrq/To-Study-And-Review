package estoquePreco.controller;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import estoquePreco.constantes.RabbitConstantes;
import estoquePreco.dto.EstoqueDTO;
import estoquePreco.service.RabbitServiceProducer;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/estoque")
public class EstoqueController {
  
  @Autowired private RabbitServiceProducer service;
  @Autowired private AmqpTemplate amqp;

  @PutMapping
  private ResponseEntity<String> alteraEstoque(@RequestBody EstoqueDTO estoque) {
    this.service.sendMessage(RabbitConstantes.QUEUE_ESTOQUE, estoque);
    return ResponseEntity.ok().body("ok");
  }

  @GetMapping("view")
  public ResponseEntity<Message> getEstoque() {
      return ResponseEntity.ok().body(this.amqp.receive(RabbitConstantes.QUEUE_ESTOQUE));
  }
  

}
