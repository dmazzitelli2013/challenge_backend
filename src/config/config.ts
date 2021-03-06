import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

interface IDatabaseConfig {
  username: string;
  password: string;
  name: string;
  host: string;
  dialect: string;
}

const databaseConfig: IDatabaseConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
};

interface IEtherscanConfig {
  apiUrl: string;
  apiKey: string;
}

const etherscanConfig: IEtherscanConfig = {
  apiUrl: process.env.ETHERSCAN_API_URL,
  apiKey: process.env.ETHERSCAN_API_KEY,
};

export { databaseConfig, etherscanConfig };
