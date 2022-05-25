import { Table, Column, Model, AllowNull, Unique } from 'sequelize-typescript';
import { IsEthereumAddress } from 'class-validator';

@Table({ modelName: 'Wallets', timestamps: true })
export default class Wallet extends Model<Wallet> {
  @IsEthereumAddress()
  @AllowNull(false)
  @Unique
  @Column
  address: string;
}
