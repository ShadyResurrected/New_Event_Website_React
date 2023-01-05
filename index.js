const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const eventRoutes = require('./src/routes/event');

const app = express();
app.use(
  express.json({
    limit: '2mb',
  })
);

mongoose
  .connect('mongodb+srv://admin:admin@cluster0.g1z7t4t.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB up');
  })
  .catch((err) => {
    console.log(`DB Error ${err}`);
  });

app.use(morgan('dev'));
app.use(cors());
const begin = Date.now();

app.get('/status', (req, res) => {
  const upTime = Number(begin) - Number(Date.now());
  res.status(200).json({
    uptime: -upTime,
    body: `Running Up till ${Date.now()}`,
  });
});

app.use('/api', authRoutes);
app.use('/api', eventRoutes);

app.listen(8001, () => {
  console.log('Server running up.');
});
