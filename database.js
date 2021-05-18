const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB || 'mongodb://127.0.0.1:27017', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((error) => console.error(error));

module.exports = mongoose;
