import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '..';
import IWallet from './wallet.interface';

interface WalletAttributes extends IWallet {
  id: string;
}

type WalletCreationAttributes = Optional<WalletAttributes, 'id'>;

interface WalletInstance
  extends Model<WalletAttributes, WalletCreationAttributes>,
    WalletAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Wallet = sequelize.define<WalletInstance>('Wallet', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  address: {
    allowNull: false,
    unique: true,
    type: DataTypes.TEXT,
  },
});

export default Wallet;
