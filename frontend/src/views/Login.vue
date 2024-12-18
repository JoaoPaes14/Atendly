<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="login-card d-flex">
      <!-- Esquerda: Formulário de Login -->
      <div class="login-form p-4">
        <h3 class="mb-4 text-center">Login</h3>
        <form @submit.prevent="handleLogin">
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

          <!-- Botão de Login -->
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary btn-login">Login</button>
          </div>
        </form>
      </div>

      <!-- Direita: Mensagem de boas-vindas -->
      <div class="login-welcome d-flex flex-column justify-content-center align-items-center">
        <h3 class="text-white mb-3">Bem-vindo de volta!</h3>
        <p class="text-white mb-4">Ainda não tem uma conta?</p>
        <router-link to="/register" class="btn btn-light">Cadastre-se</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // API login
    async handleLogin() {
      try {
        const response = await axios.post("http://localhost:5000/api/users/login", {
          email: this.email,
          password: this.password,
        });

        // Salvar o token no localStorage
        localStorage.setItem("token", response.data.token);

        // Caso o login seja bem-sucedido
        alert("Login realizado com sucesso!");
        console.log(response.data);

        // Redirecionar para a tela de perfil
        this.$router.push("/profile");
      } catch (error) {
        // Tratamento de erro
        console.error("Erro ao realizar login:", error);
        alert("Falha no login. Verifique suas credenciais e tente novamente.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilo do container principal */
body, html {
  margin: 0;
  padding: 0;
  background-color: #f2f6fc;
  height: 100%;
}

.container {
  height: 100vh; /* Garante altura total da viewport */
}

/* Estilo do Card */
.login-card {
  display: flex;
  flex-wrap: wrap; /* Permite que se ajuste em telas menores */
  width: 100%;
  max-width: 750px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Formulário de Login */
.login-form {
  flex: 1;
  background-color: #ffffff;
  padding: 30px;
  box-sizing: border-box;
}

.login-form h3 {
  color: #2c3e50;
}

.form-control {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ddd;
}

/* Botão Login */
.btn-login {
  background-color: #4cae4f;
  border: none;
  font-size: 1rem;
  padding: 10px 28px;
  border-radius: 5px;
}

.btn-login:hover {
  background-color: #3b8c3c;
}

/* Seção de boas-vindas */
.login-welcome {
  flex: 1;
  background: linear-gradient(to bottom, #2c3e50, #4cae4f);
  text-align: center;
  color: white;
  padding: 40px;
  box-sizing: border-box;
}

.login-welcome h3 {
  font-size: 1.8rem;
  font-weight: bold;
}

.login-welcome p {
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
  .login-card {
    flex-direction: column;
    max-width: 100%;
  }

  .login-welcome {
    padding: 20px;
  }

  .btn-login,
  .btn-light {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .login-form h3 {
    font-size: 1.5rem;
  }

  .login-welcome h3 {
    font-size: 1.4rem;
  }

  .form-control {
    font-size: 0.9rem;
  }
}
</style>
