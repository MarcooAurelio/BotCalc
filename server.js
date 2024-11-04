const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve arquivos estáticos

// Armazenamento simples em memória
let messages = [];

// Rota para obter mensagens
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Rota para salvar mensagens
app.post('/messages', (req, res) => {
  const { userMessage, botMessage } = req.body;
  messages.push({ userMessage, botMessage });
  res.status(201).json({ success: true });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
