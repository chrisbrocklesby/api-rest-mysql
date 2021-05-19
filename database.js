const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB || '', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((error) => console.error(error));

module.exports = mongoose;
