const router = require('express').Router();
const Book   = require('../models/Book');

router.post('/', async (req, res) => {
  try { res.status(201).json(await Book.create(req.body)); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
router.get('/', async (_req, res) => {
  res.json(await Book.find());
});
router.put('/:id', async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
