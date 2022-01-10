// eslint-disable-next-line no-unused-vars
import mongoConnection from '../dbConnection/mongoConnection';
import app from './app';

require('dotenv').config();

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
// no-console
  console.log(`server is running at port ${PORT}...`);
});

// app.get('/', (req, res) => {
//   res.status(200).send('babel');
// });
