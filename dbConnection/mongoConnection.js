import mongoose from 'mongoose';
import config from '../config/db_config';

const dbUrl = config.MONGO_URI;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('mongodb connected...', new Date());
}).catch((err) => console.log('error in db connection>>>>', err));
