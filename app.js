import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();

// Connect to the DB
mongoose.connect('mongodb://localhost', { useNewUrlParser: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);

  res.status(400).send(`Error: ${res.originUrl} not found.`);

  next();
});

// Catch 500
app.use((err, req, res, next) => {
  console.log(err.stack);

  res.status(500).send(`Error: ${err}.`);

  next();
});

routes(app);

export default app;
