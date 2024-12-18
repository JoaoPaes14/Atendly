import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes'; 
import { sequelize } from './config/db'; 

dotenv.config();
// Cmd para rodar o backend node dist/app.js
const app = express();

// Configuração de CORS
app.use(cors({
  origin: 'http://localhost:8081',  // Permite requisições do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Permite esses métodos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Permite esses cabeçalhos
}));

// Middleware para parsing de JSON
app.use(express.json());

// Roteamento
app.use('/api/users', userRoutes);

// Sincronização do Sequelize com o banco de dados
sequelize.sync()
  .then(() => {
    // Porta do servidor definida por variável de ambiente ou padrão 5000
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });




