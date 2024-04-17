package backendWorker.producer;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PagamentoResSucess {
  
  @Autowired private AmqpTemplate amqp;

  public void gerarResposta(String message) {
    this.amqp.convertAndSend("pagamento-res-sucess",
    "pagamento-sucess-rk",
    message);
  }

}
