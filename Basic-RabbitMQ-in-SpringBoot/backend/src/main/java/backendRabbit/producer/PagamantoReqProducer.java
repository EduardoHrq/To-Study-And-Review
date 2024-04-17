package backendRabbit.producer;

import org.springframework.amqp.AmqpException;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import backendRabbit.dto.PagamentoDTO;

/**
 * PagamantoReqProducer
 */
@Component
public class PagamantoReqProducer {

  // classe que faz conexao com rabbitmq
  @Autowired private AmqpTemplate amqp;

  private final ObjectMapper objMapper = new ObjectMapper();

  public void integrar(PagamentoDTO pagamento) throws JsonProcessingException, AmqpException {
    this.amqp.convertAndSend("pagamento-req-exchange", "pagamento-req-rk", 
    objMapper.writeValueAsString(pagamento));
  }

  
}