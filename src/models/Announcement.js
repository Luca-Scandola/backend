const { Schema, model } = require('mongoose');

const AnnouncementSchema = new Schema({
  id_livro:   { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  id_usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  data_criacao: { type: Date, default: Date.now },
  status: { type: String, enum: ['ativo','encerrado','vendido'], default: 'ativo' }
});

module.exports = model('Announcement', AnnouncementSchema);
