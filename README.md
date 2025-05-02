# Exemplo: RabbitMQ com Node.js

Este é um exemplo simples de uma aplicação usando RabbitMQ para comunicação assíncrona entre um produtor e um consumidor.

## Pré-requisitos

- Node.js instalado
- Docker instalado

## Subindo o RabbitMQ com Docker Compose

1. No terminal, execute:

```
docker-compose up -d
```

2. Acesse o painel do RabbitMQ:
   - URL: http://localhost:15672
   - Usuário: `meuusuario`
   - Senha: `senhasecreta`

## Como usar a aplicação

1. Instale as dependências:

```
npm install
```

2. Inicie o consumidor:

```
npm run start:consumer
```

3. Em outro terminal, execute o produtor:

```
npm run start:producer
```

Você verá a mensagem sendo enviada e processada pelo consumidor.

## Parar os serviços

```
docker-compose down
```

## Autor

Gerado por Guilherme Polo.
