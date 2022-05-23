import { Sequelize, Dialect } from 'sequelize';
import { databaseConfig } from '../config/database.config';

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  { dialect: databaseConfig.dialect as Dialect },
);

export { Sequelize, sequelize };
