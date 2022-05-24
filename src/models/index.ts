import { Sequelize, Dialect } from 'sequelize';
import { databaseConfig } from '../config/config';

const sequelize = new Sequelize(
  databaseConfig.name,
  databaseConfig.username,
  databaseConfig.password,
  { dialect: databaseConfig.dialect as Dialect },
);

export { Sequelize, sequelize };
