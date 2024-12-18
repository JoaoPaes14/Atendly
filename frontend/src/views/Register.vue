<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="register-card d-flex">
      <!-- Esquerda: Formulário de Cadastro -->
      <div class="register-form p-4">
        <h3 class="mb-4 text-center">Cadastro</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group mb-3">
            <label for="name">Nome</label>
            <input
              type="text"
              id="name"
              v-model="name"
              class="form-control"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="password">Senha</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary btn-register">Cadastrar</button>
          </div>
        </form>
      </div>

      <!-- Direita: Mensagem de boas-vindas -->
      <div class="register-welcome d-flex flex-column justify-content-center align-items-center">
        <h3 class="text-white mb-3">Bem-vindo!</h3>
        <p class="text-white mb-4">Já tem uma conta?</p>
        <router-link to="/login" class="btn btn-light">Faça Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post("http://localhost:5000/api/users/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        alert("Cadastro realizado com sucesso!");
        this.$router.push("/login");
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar. Por favor, tente novamente.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilo do container principal */
.container {
  background-color: #f2f6fc; /* Cor de fundo neutra */
}

/* Estilo do Card */
.register-card {
  display: flex;
  width: 750px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Estilo do formulário */
.register-form {
  flex: 1;
  background-color: #ffffff;
}

.register-form h3 {
  color: #2c3e50;
}

.form-control {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ddd;
}

/* Botão Cadastrar */
.btn-register {
  background-color: #4cae4f;
  border: none;
  font-size: 0.8rem; /* Tamanho reduzido */
  padding: 10px 28px;
}

.btn-register:hover {
  background-color: #3b8c3c;
}

/* Mensagem de boas-vindas */
.register-welcome {
  flex: 1;
  background: linear-gradient(to bottom, #2c3e50, #4cae4f);
  text-align: center;
}

.text-white {
  color: #fff;
}

/* Botão de Login */
.btn-light {
  color: #4cae4f;
  border: 1px solid #fff;
}

.btn-light:hover {
  background-color: #fff;
  color: #2c3e50;
}
/* Responsividade*/
@media (max-width: 768px) {
  .register-card .form-control,
  .btn-login,
  .btn-light {
    font-size: 1rem; 
    padding: 12px; 
  }
}
@media (max-width: 768px) {
  .register-card {
    width: 100%; 
    height: auto; 
  }
}
</style>
