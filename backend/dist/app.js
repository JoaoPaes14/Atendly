"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const db_1 = require("./config/db");
dotenv.config();
const app = (0, express_1.default)();
// Configuração de CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:8081', // Permite requisições do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite esses métodos
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite esses cabeçalhos
}));
// Middleware para parsing de JSON
app.use(express_1.default.json());
// Roteamento
app.use('/api/users', userRoutes_1.default);
// Sincronização do Sequelize com o banco de dados
db_1.sequelize.sync()
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
// Middleware para tratamento de erros
