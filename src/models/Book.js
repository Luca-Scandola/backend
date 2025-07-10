const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  titulo:      { type: String, required: true },
  autor:       { type: String },
  preco:       { type: Number },
  id_categoria:{ type: Schema.Types.ObjectId, ref: 'Category', required: true },
  id_vendedor: { type: Schema.Types.ObjectId, ref: 'User',     required: true }
});

module.exports = model('Book', BookSchema);
