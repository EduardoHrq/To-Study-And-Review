package backendRabbit.facade;

import org.springframework.amqp.AmqpException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;

import backendRabbit.dto.PagamentoDTO;
import backendRabbit.producer.PagamantoReqProducer;

@Service
public class PagamentoFacade {

  @Autowired private PagamantoReqProducer producer;
  
  public String solicitarPagamento(PagamentoDTO req) {
    try {
      producer.integrar(req);
    } catch (JsonProcessingException e) {
      return "Ocorreu um erro ao solicitar pagamento" + e.getMessage();
    } catch (AmqpException e) {
      return "Ocorreu um erro ao solicitar pagamento" + e.getMessage();
    }
    return "Pagamento aguardando confirmação";
  }

  public void erroPagamento(String payload) {
  
    System.err.println("\n\n=== Message Error === -> Erro ao efeutar pagamento" + payload);

  }

  public void sucessPagamento(String payload) {
    System.out.println("\n\n=== Message Sucess === -> pagamento efetuado com sucesso" + payload);
  }
}
