require('dotenv').config();
const express = require('express');
const glob = require('glob');

const app = express();
app.use(express.static('public'));

glob.sync('./routes/**/*.js').forEach((file) => {
  require(file)(app);
});

app.use((request, response, next) => {
  response
    .status(404)
    .json({
      error: {
        status: 404,
        name: 'notFound',
        message: 'Not found',
      },
    });
  next();
});

app.use((error, request, response, next) => {
  response
    .status(error.status || 500)
    .json({
      error: {
        status: error.status || 500,
        name: error.name || 'error',
        message: error.message || 'error',
      },
    });
  next();
});

app.listen(process.env.PORT || 3000);
