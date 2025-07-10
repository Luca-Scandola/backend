const { Schema, model } = require('mongoose');

const NegotiationSchema = new Schema({
  id_anuncio:      { type: Schema.Types.ObjectId, ref: 'Announcement', required: true },
  id_comprador:    { type: Schema.Types.ObjectId, ref: 'User',         required: true },
  data_negociacao: { type: Date, default: Date.now },
  valor_final:     { type: Number, required: true },
  status:          { type: String, enum: ['pendente','aceito','rejeitado'], default: 'pendente' }
});

module.exports = model('Negotiation', NegotiationSchema);
