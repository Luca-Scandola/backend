const router   = require('express').Router();
const Category = require('../models/Category');

router.get('/', async (_req, res) => {
  res.json(await Category.find());
});

router.get('/:id', async (req, res) => {
  const cat = await Category.findById(req.params.id);
  if (!cat) return res.status(404).json({ error: 'Categoria não encontrada' });
  res.json(cat);
});

router.post('/', async (req, res) => {
  try {
    const nova = await Category.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
