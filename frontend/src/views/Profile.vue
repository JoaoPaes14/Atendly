<template>
  <div class="profile container d-flex justify-content-center align-items-center vh-100">
    <div class="profile-card d-flex">
      <!-- Esquerda: Dados do Perfil -->
      <div class="profile-info p-4">
        <h3 class="mb-4 text-center">Perfil</h3>
        <div v-if="user">
          <div class="profile-item">
            <p><strong>Nome:</strong> {{ user.name }}</p>
          </div>
          <div class="profile-item">
            <p><strong>E-mail:</strong> {{ user.email }}</p>
          </div>
        </div>
        <div v-else>
          <p>Carregando...</p>
        </div>
      </div>

      <!-- Direita: Mensagem de boas-vindas -->
      <div class="profile-welcome d-flex flex-column justify-content-center align-items-center">
        <h3 class="text-white mb-3">Bem-vindo de volta!</h3>
        <p class="text-white mb-4">Aqui estão os detalhes do seu perfil.</p>
        <router-link to="/login" class="btn btn-light btn-logout">Sair</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null
    };
  },
  async created() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/login');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.user = response.data;
    } catch (error) {
      this.$router.push('/login');
      console.error(error);
    }
  }
};
</script>

<style scoped>
/* Estilo do container principal */
.container {
  background-color: #f2f6fc; 
  padding: 20px;
}

/* Estilo do Card */
.profile-card {
  display: flex;
  flex-wrap: wrap; 
  width: 750px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  /* Responsividade para telas menores */
  .profile-card {
    width: 100%; 
    height: auto; 
    flex-direction: column; 
  }
}

/* Estilo das informações do perfil */
.profile-info {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  box-sizing: border-box; 
}

.profile-info h3 {
  color: #2c3e50;
}

.profile-info .profile-item {
  margin-bottom: 20px;
}

.profile-info p {
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
}

/* Mensagem de boas-vindas */
.profile-welcome {
  flex: 1;
  background: linear-gradient(to bottom, #2c3e50, #4cae4f);
  text-align: center;
  padding: 40px;
  color: #fff;
  box-sizing: border-box; 
}

.profile-welcome h3 {
  font-size: 1.8rem;
  font-weight: 700;
}

.profile-welcome p {
  font-size: 1.1rem;
  font-weight: 500;
}

.text-white {
  color: #fff;
}

/* Botão Sair */
.btn-light {
  color: #4cae4f;
  border: 2px solid #fff;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
  background-color: white;
}

.btn-light:hover {
  background-color: #4cae4f;
  color: white;
}

/* Estilo de borda e sombra */
.profile-info p strong {
  font-weight: bold;
  color: #4cae4f;
}

/* Responsividade para telas muito pequenas (mobile) */
@media (max-width: 480px) {
  .profile-card {
    width: 100%;
    height: auto;
    flex-direction: column; 
  }

  .profile-info h3 {
    font-size: 1.5rem; 
  }

  .profile-info p {
    font-size: 1rem; 
  }

  .btn-light {
    padding: 12px 20px; 
    font-size: 0.9rem; 
  }
}
</style>
