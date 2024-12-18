
# Projeto de Login e Cadastro - Vue.js e Node.js

Este projeto consiste em um sistema simples de login e cadastro com uma interface frontend construída com Vue.js e um backend em Node.js. O frontend envia requisições para o backend, que lida com a autenticação de usuários.

## Tecnologias Utilizadas

- **Frontend:** Vue.js
- **Backend:** Node.js com Express
- **Banco de Dados:** MySql

## Frontend - Vue.js

A parte frontend da aplicação foi desenvolvida com Vue.js. O aplicativo oferece uma interface simples para login e cadastro de usuários. Quando o usuário preenche o formulário de login, as credenciais são enviadas para o backend para validação.

### Comandos para o Frontend

1. **Instalar dependências:**
   Para instalar  as dependências necessárias para o frontend, execute:

   ```bash
   npm install
   ```

2. **Rodar o servidor de desenvolvimento:**
   Para rodar o servidor de desenvolvimento e visualizar o frontend em seu navegador, execute:

   ```bash
   npm run serve
   ```

   Isso irá compilar e iniciar o servidor, e você poderá acessar a aplicação em `http://localhost:8080`.

3. **Compilar para produção:**
   Quando estiver pronto para gerar uma versão otimizada para produção, execute:

   ```bash
   npm run build
   ```

## Backend - Node.js

O backend foi desenvolvido com Node.js e Express. Ele fornece uma API para autenticação de usuários, onde o frontend envia o e-mail e a senha do usuário para validação. Caso as credenciais sejam corretas, o backend retorna um token de autenticação.

### Comandos para o Backend

1. **Instalar dependências:**
   Primeiro, instale as dependências do backend. Acesse a pasta do backend e execute:

   ```bash
   npm install
   ```

2. **Rodar o servidor do backend:**
   Após a instalação das dependências, execute o seguinte comando para iniciar o servidor:

   ```bash
   node dist/app.js
   ```

   Isso iniciará o servidor do backend, e ele ficará escutando por requisições na porta configurada, normalmente `http://localhost:5000`.

---

## Estrutura do Projeto

A estrutura do projeto é dividida entre o frontend e o backend. O frontend está na pasta `frontend/` e o backend está na pasta `backend/`. Certifique-se de rodar os dois servidores (frontend e backend) para que a aplicação funcione corretamente.

```
/frontend       # Código do Vue.js (frontend)
/backend        # Código do Node.js (backend)
```

---

## Funcionalidade

- **Login:** O usuário pode fazer login enviando seu e-mail e senha. Se as credenciais forem corretas, um token JWT é gerado e enviado ao frontend.
- **Cadastro:** O usuário pode se registrar com um e-mail e senha 
- **Perfil:** O perfil permite que os usuários visualizem as informações do seu perfil após o login. Ele exibe o nome e e-mail do usuário, além de permitir que ele saia da aplicação.

