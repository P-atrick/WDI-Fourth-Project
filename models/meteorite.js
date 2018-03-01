const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const meteoriteSchema = mongoose.Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  length: { type: Number, required: true },
  width: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  found: { type: Date, required: true },
  image: { type: String, required: true },
  price: { type: Number },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [ commentSchema ]
});

meteoriteSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.v;
  }
});

meteoriteSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('meteorite', meteoriteSchema);
