package estoquePreco.service;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RabbitServiceProducer {
  
  @Autowired private AmqpTemplate amqpTemplate;

  public void sendMessage(String queueName, Object message) {
    this.amqpTemplate.convertAndSend(queueName, message);
  }

}
