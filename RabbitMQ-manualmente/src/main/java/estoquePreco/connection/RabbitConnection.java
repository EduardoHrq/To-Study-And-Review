package estoquePreco.connection;

import org.springframework.amqp.core.AmqpAdmin;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.stereotype.Component;

import estoquePreco.constantes.RabbitConstantes;
import jakarta.annotation.PostConstruct;

@Component
public class RabbitConnection {
  
  // primeiro criar as filas e depois as exchanges e relaciona-las

  private static final String NOME_EXCHANGE = "amq.direct";

  private AmqpAdmin admin;

  public RabbitConnection(AmqpAdmin admin) {
    this.admin = admin;
  }

  private Queue queue(String queueName) {
    return new Queue(queueName, true, false, false);
  }

  private DirectExchange trocaDireta() {
    return new DirectExchange(NOME_EXCHANGE);
  }

  private Binding relacionamento(Queue queue, DirectExchange troca) {
    return new Binding(queue.getName(), Binding.DestinationType.QUEUE, troca.getName(), queue.getName(), null);
  }

  @PostConstruct // execultara assim que a classe componente for construida
  private void add() {
    var queueEstoque = this.queue(RabbitConstantes.QUEUE_ESTOQUE);
    var queuePreco = this.queue(RabbitConstantes.QUEUE_PRECO);

    DirectExchange troca = this.trocaDireta();

    var relacionamentoEstoque = this.relacionamento(queueEstoque, troca);
    var relacionamentoPreco = this.relacionamento(queuePreco, troca);

    this.admin.declareQueue(queueEstoque);
    this.admin.declareQueue(queuePreco);

    this.admin.declareExchange(troca);

    this.admin.declareBinding(relacionamentoEstoque);
    this.admin.declareBinding(relacionamentoPreco);
  }

}
