<template>
  <div class="profile container d-flex justify-content-center align-items-center vh-100">
    <div class="profile-card">
      <!-- Esquerda: Dados do Perfil -->
      <div class="profile-info p-4">
        <h3 class="mb-4 text-center">Perfil</h3>
        <div class="profile-image mb-4 text-center">
          <img src="@/assets/volunteer_avatar.png" alt="Imagem do Perfil" class="img-fluid rounded-circle" />
        </div>
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
/* Fundo do container principal */
body, html {
  margin: 0;
  padding: 0;
  background-color: #f2f6fc;
  height: 100%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Estilo do Card */
.profile-card {
  display: flex;
  flex-wrap: wrap; 
  width: 100%;
  max-width: 750px; /* Limita largura máxima */
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Dados do perfil */
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

.profile-info p strong {
  font-weight: bold;
  color: #4cae4f;
}

/* Imagem do perfil */
.profile-image img {
  max-width: 150px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #4cae4f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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

/* Responsividade */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column; /* Coluna em telas menores */
  }

  .profile-image img {
    max-width: 120px;
  }
}

@media (max-width: 480px) {
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
