require('dotenv').config();
const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');

const categoryRoutes    = require('./routes/categories');
const userRoutes        = require('./routes/users');
const bookRoutes        = require('./routes/books');
const announcementRoutes= require('./routes/announcements');
const negotiationRoutes = require('./routes/negotiations');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro na conexão:', err));

app.use('/api/categories',    categoryRoutes);
app.use('/api/users',         userRoutes);
app.use('/api/books',         bookRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/negotiations',  negotiationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
