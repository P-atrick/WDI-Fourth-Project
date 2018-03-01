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
  name: { type: String, required: 'Please enter a name' },
  weight: { type: Number, required: 'Please enter a weight' },
  height: { type: Number, required: 'Please enter a height' },
  length: { type: Number, required: 'Please enter a length' },
  width: { type: Number, required: 'Please enter a width' },
  location: { type: String, required: 'Please enter a location' },
  type: { type: String, required: 'Please select a type' },
  found: { type: Date, required: 'Please enter a date' },
  image: { type: String, required: 'Please add an image' },
  forSale: false,
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
