const router = require('express').Router();
const User   = require('../models/User');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// registro
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Campos faltando' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }
  if (await User.findOne({ email })) {
    return res.status(400).json({ error: 'Email já existe' });
  }
  const user = await User.create({ nome, email, senha });
  res.status(201).json({ id: user._id, nome: user.nome, email: user.email });
});

// login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'Campos faltando' });
  }
  const user = await User.findOne({ email, senha });
  if (!user) {
    return res.status(400).json({ error: 'Credenciais inválidas' });
  }
  res.json({ id: user._id, nome: user.nome, email: user.email });
});

module.exports = router;
