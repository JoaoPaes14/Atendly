import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes'; 
import { sequelize } from './config/db'; 

dotenv.config();
// Cmd para rodar o backend node dist/app.js
const app = express();


app.use(cors({
  origin: 'http://localhost:8081',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],  
}));


app.use(express.json());


app.use('/api/users', userRoutes);


sequelize.sync()
  .then(() => {
    
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });




