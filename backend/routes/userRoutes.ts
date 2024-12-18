import { Router } from 'express';
import { register, login, profile } from '../controllers/userController';
import { userMiddleware } from '../middleware/userMiddleware';

const router = Router();

// Rota de registro
router.post('/register', register);

// Rota de login
router.post('/login', login);

// Rota de perfil de usuário 
router.get('/profile', userMiddleware, profile);

export default router;
