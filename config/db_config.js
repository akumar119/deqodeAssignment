require('dotenv').config();

let MONGO_URI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`;

if (process.env.NODE_ENV !== 'dev') {
  MONGO_URI = `mongodb://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`;
}
module.exports = {
  MONGO_URI,
};
