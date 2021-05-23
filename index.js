require('dotenv').config();
const express = require('express');
const glob = require('glob');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
  const codes = {
    validationError: 400,
    authError: 401,
  };
  const status = codes[error.name] || error.status || 500;

  response
    .status(status)
    .json({
      error: {
        status,
        name: error.name || 'error',
        message: error.message || 'error',
      },
    });
  next();
});

app.listen(process.env.PORT || 3000);
