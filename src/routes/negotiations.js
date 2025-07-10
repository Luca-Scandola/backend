const router      = require('express').Router();
const Negotiation = require('../models/Negotiation');

router.get('/', async (_req, res) => {
  const list = await Negotiation.find()
    .populate({
      path: 'id_anuncio',
      populate: { path: 'id_livro' }
    })
    .populate('id_comprador', 'nome email');
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const n = await Negotiation.findById(req.params.id);
  if (!n) return res.status(404).json({ error: 'Negociação não encontrada' });
  res.json(n);
});

router.post('/', async (req, res) => {
  try {
    const novo = await Negotiation.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
