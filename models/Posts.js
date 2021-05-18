const database = require('../database');

const { Schema } = database;

const schema = new Schema({
  title: {
    type: String,
    required: [true, 'required'],
  },
  description: {
    type: String,
    required: [true, 'required'],
  },
  status: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

module.exports = database.model('post', schema);
