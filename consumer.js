require('dotenv').config();
const amqp = require('amqplib');

async function receive() {
  const connection = await amqp.connect({
    protocol: 'amqp',
    hostname: process.env.RABBITMQ_HOST,
    port: process.env.RABBITMQ_PORT,
    username: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASS,
    vhost: process.env.RABBITMQ_VHOST
  });

  const channel = await connection.createChannel();
  const queue = 'cadastro';

  await channel.assertQueue(queue);
  console.log("Aguardando mensagens...");

  channel.consume(queue, msg => {
    const dados = JSON.parse(msg.content.toString());
    console.log("Mensagem recebida:", dados);
    console.log(`Enviando e-mail de boas-vindas para ${dados.email}`);
    channel.ack(msg);
  });
}

receive();
