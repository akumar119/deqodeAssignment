// import mongoose from 'mongoose';
// import config from '../config/db_config';
const mongoose = require('mongoose');
const config = require('../config/db_config');

const dbUrl = config.MONGO_URI;

mongoose.connect(dbUrl, {}).then(() => {
  console.log('mongodb connected...', new Date());
}).catch((err) => console.log('error in db connection>>>>', err));
