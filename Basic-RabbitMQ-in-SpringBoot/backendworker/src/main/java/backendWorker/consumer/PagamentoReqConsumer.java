package backendWorker.consumer;

import java.util.Random;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import backendWorker.producer.PagamentoResErro;
import backendWorker.producer.PagamentoResSucess;

@Component
public class PagamentoReqConsumer {
  
  @Autowired private PagamentoResErro erro;
  @Autowired private PagamentoResSucess sucess;

  @RabbitListener(queues = { "pagamento-req-queue" })
  public void receberMensagem(@Payload Message message) {
    System.out.println(message);
    if(new Random().nextBoolean()) {
      sucess.gerarResposta("Pagamento efetuado com sucesso " + message);
    } else {
      erro.gerarResposta("Ocorreu algum erro durante o pagamento, tente novamente! " + message);
    }
  }

}
