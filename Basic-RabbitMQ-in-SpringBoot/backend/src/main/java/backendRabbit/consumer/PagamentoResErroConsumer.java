package backendRabbit.consumer;

import java.time.LocalDateTime;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import backendRabbit.facade.PagamentoFacade;

@Component
public class PagamentoResErroConsumer {
  
  @Autowired private PagamentoFacade facade;

  @RabbitListener(queues = { "pagamento-res-erro" })
  public void receive(@Payload Message message) { 
    System.out.println("Message: " + message + "  " + LocalDateTime.now());
    String payload = String.valueOf(message.getPayload());

    this.facade.erroPagamento(payload);
  }
}
