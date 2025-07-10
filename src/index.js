require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const authRoutes         = require('./routes/auth');
const categoryRoutes     = require('./routes/categories');
const userRoutes         = require('./routes/users');
const bookRoutes         = require('./routes/books');
const announcementRoutes = require('./routes/announcements');
const negotiationRoutes  = require('./routes/negotiations');

const app = express();

app.use(cors());
app.use(express.json());

// autenticação básica
app.use('/auth', authRoutes);

// CRUD público
app.use('/categories',    categoryRoutes);
app.use('/users',         userRoutes);
app.use('/books',         bookRoutes);
app.use('/announcements', announcementRoutes);
app.use('/negotiations',  negotiationRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro na conexão:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
