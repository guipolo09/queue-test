require('dotenv').config();
const amqp = require('amqplib');

async function send() {
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
  const mensagem = { email: 'joao@email.com', nome: 'João' };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(mensagem)));
  console.log("Mensagem enviada:", mensagem);

  setTimeout(() => connection.close(), 500);
}

send();
