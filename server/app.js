const express = require('express');
const bodyParser = require('body-parser');

const rankRoutes = require('./routes/rankRoutes');
const wordsRoutes = require('./routes/wordsRoutes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers', '*'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/rank', rankRoutes); 
app.use('/api/words', wordsRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000);