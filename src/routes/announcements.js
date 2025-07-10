const router       = require('express').Router();
const Announcement = require('../models/Announcement');

router.get('/', async (_req, res) => {
  const list = await Announcement.find()
    .populate('id_livro')
    .populate('id_usuario', 'nome');
  res.json(list);
});

router.get('/mine/:userId', async (req, res) => {
  const mine = await Announcement.find({ id_usuario: req.params.userId })
    .populate('id_livro');
  res.json(mine);
});

router.post('/', async (req, res) => {
  try {
    const anuncio = await Announcement.create(req.body);
    res.status(201).json(anuncio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
