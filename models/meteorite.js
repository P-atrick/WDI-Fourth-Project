const mongoose = require('mongoose');

const meteoriteSchema = mongoose.Schema({
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  length: { type: Number, required: true },
  width: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  found: { type: Date, required: true },
  image: { type: String, required: true }
});

meteoriteSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.v;
  }
});

module.exports = mongoose.model('meteorite', meteoriteSchema);
