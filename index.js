require('dotenv').config();
const express = require('express');
const glob = require('glob');

const app = express();
app.use(express.static('public'));

glob('./routes/**/*.js', (error, files) => {
  if (error) { throw new Error('Error with route files'); }
  files.map((file) => require(file)(app));
});

app.listen(process.env.PORT || 3000);
