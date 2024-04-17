## this project contains a simples use to rabbitmq in a spring boot application 

folder backend-worker: handles messages that go to the exchange and direct them to the correct queues

folder backend: the entire application context, and where there is a listener for the queues
