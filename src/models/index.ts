import { Sequelize, Dialect } from 'sequelize';
import config from '../../config/database';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { dialect: config.dialect as Dialect },
);

export { Sequelize, sequelize };
