import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import { NotaFiscal } from '../models/NotaFiscal';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'db_faturamento_nota',
  synchronize: true,
  logging: ['error'],
  entities: [NotaFiscal],
  migrations: [
    path.join(__dirname, '../migrations/*.js'),
    path.join(__dirname, '../migrations/*.ts')
  ],
  subscribers: [],
});
