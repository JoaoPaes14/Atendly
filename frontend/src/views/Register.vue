<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="register-card d-flex">
      <!-- Esquerda: Formulário de Cadastro -->
      <div class="register-form p-4">
        <h3 class="mb-4 text-center">Cadastro</h3>
        <form @submit.prevent="handleSubmit">
          <!-- Campo Nome -->
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

          <!-- Campo E-mail -->
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

          <!-- Campo Senha -->
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

          <!-- Botão de Cadastro -->
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
/* Container Principal */
body, html {
  margin: 0;
  padding: 0;
  background-color: #f2f6fc;
  height: 100%;
}

.container {
  height: 100vh;
}

/* Card Principal */
.register-card {
  display: flex;
  flex-wrap: wrap; /* Permite ajuste em telas menores */
  width: 100%;
  max-width: 750px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Formulário */
.register-form {
  flex: 1;
  background-color: #ffffff;
  padding: 30px;
  box-sizing: border-box;
}

.register-form h3 {
  color: #2c3e50;
}

.form-control {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ddd;
}

/* Botão de Cadastro */
.btn-register {
  background-color: #4cae4f;
  border: none;
  font-size: 1rem;
  padding: 10px 28px;
  border-radius: 5px;
}

.btn-register:hover {
  background-color: #3b8c3c;
}

/* Mensagem de Boas-Vindas */
.register-welcome {
  flex: 1;
  background: linear-gradient(to bottom, #2c3e50, #4cae4f);
  text-align: center;
  color: white;
  padding: 40px;
  box-sizing: border-box;
}

.register-welcome h3 {
  font-size: 1.8rem;
  font-weight: bold;
}

.register-welcome p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.btn-light {
  color: #4cae4f;
  background-color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 5px;
  font-size: 1rem;
}

.btn-light:hover {
  background-color: #4cae4f;
  color: white;
  transition: all 0.3s;
}

/* Responsividade */
@media (max-width: 768px) {
  .register-card {
    flex-direction: column; /* Alinha verticalmente em telas pequenas */
    max-width: 100%;
  }

  .register-welcome {
    padding: 20px;
  }

  .btn-register,
  .btn-light {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .register-form h3 {
    font-size: 1.5rem;
  }

  .register-welcome h3 {
    font-size: 1.4rem;
  }

  .form-control {
    font-size: 0.9rem;
  }
}
</style>
