import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { databaseConfig } from '../config/config';
import { PriceQuote, Wallet } from '../models';

const sequelize = new Sequelize({
  database: databaseConfig.name,
  dialect: databaseConfig.dialect as Dialect,
  username: databaseConfig.username,
  password: databaseConfig.password,
  models: [Wallet, PriceQuote],
});

export const connectToDatabase = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    process.exit(1);
  }
};

export default sequelize;
