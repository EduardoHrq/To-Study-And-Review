package backendWorker.producer;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PagamentoResErro {
  
  @Autowired private AmqpTemplate amqp;

  public void gerarResposta(String message) {
    this.amqp.convertAndSend(
      "pagamento-res-erro", 
      "pagamento-erro-rk", message);
  }

}
