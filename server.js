/* eslint-disable linebreak-style */
import express from 'express';

// require('./calc');

const PORT = 8001;
const app = express();

app.listen(PORT, () => {
// no-console
  console.log(`server is running at port ${PORT}...`);
});

// app.get('/', (req, res) => {
//   res.status(200).send('babel');
// });
