import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';
import authentication from './src/middlewares/authentication.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Servidor funcionando correctamente",
  });
});

// Rutas públicas
app.use('/auth', authRouter);

// Rutas protegidas
app.use('/api', authentication, productsRouter);

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).send('Recurso no encontrado');
});

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

export default app;
