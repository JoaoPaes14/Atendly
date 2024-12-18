import { DataTypes,Model } from "sequelize";
import {sequelize} from '../config/db';

class User extends Model{
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

}
User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName:'User',
        tableName:'users',
    }
);

export default User;