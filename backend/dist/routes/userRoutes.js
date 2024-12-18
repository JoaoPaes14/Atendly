"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userMiddleware_1 = require("../middleware/userMiddleware");
const router = (0, express_1.Router)();
// Rota de registro
router.post('/register', userController_1.register);
// Rota de login
router.post('/login', userController_1.login);
// Rota de perfil de usuário 
router.get('/profile', userMiddleware_1.userMiddleware, userController_1.profile);
exports.default = router;
