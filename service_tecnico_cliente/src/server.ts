import express from "express";
import cors from "cors";
import path from "path";
import { AppDataSource } from "./config/db";
import { clienteRouter } from "./routes/cliente.routes";
import { tecnicoRouter } from "./routes/tecnico.routes";


const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

app.use('/api',clienteRouter);
app.use('/api',tecnicoRouter);


AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco de dados:", error);
  });

const port = Number(process.env.PORT) || 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});