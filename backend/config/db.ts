import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(

  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging : true,

});

const connectDB = async(): Promise<void> =>{
    try{
        await sequelize.authenticate();
        console.log("Conectado ao MySQL com sucesso!");
        await sequelize.sync();
    }catch(error){
        console.error('Erro ao conectar ao MySQL:',error);
        process.exit(1);

    }
};

export {sequelize, connectDB};