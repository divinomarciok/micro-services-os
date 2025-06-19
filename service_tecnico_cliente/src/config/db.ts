import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import { Cliente } from '../models/Cliente';
import { Tecnico } from '../models/Tecnico';

dotenv.config();

export const AppDataSource = new DataSource({
  
  type: 'postgres',  
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10), 
  username: process.env.DB_USERNAME || 'user',  
  password: process.env.DB_PASSWORD || 'password',  
  database: process.env.DB_DATABASE || 'db_cardapio',  
  synchronize: true,
  //logging: ["query", "error"],
  logging:["error"],
  entities: [Cliente, Tecnico], // Adicionando Tecnico às entidades
  migrations: [path.join(__dirname, "../migrations/*.js"),
    path.join(__dirname, "../migrations/*.ts")
  ], // Caminho absoluto para migrations compiladas
  subscribers: [],  
});