const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
  nome: { type: String, required: true }
});

module.exports = model('Category', CategorySchema);
