// This file is used by Sequelize to create new models or run migrations
require('dotenv').config({ path: process.env.ENV_PATH ? process.env.ENV_PATH : '.env' });

const defaultConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
};

module.exports = {
  development: defaultConfig,
  test: defaultConfig,
  staging: defaultConfig,
  production: defaultConfig,
};
