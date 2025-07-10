const router = require('express').Router();
const User   = require('../models/User');

router.get('/', async (_req, res) => {
  res.json(await User.find());
});

router.get('/:id', async (req, res) => {
  const u = await User.findById(req.params.id);
  if (!u) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json(u);
});

router.post('/', async (req, res) => {
  try {
    const novo = await User.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
