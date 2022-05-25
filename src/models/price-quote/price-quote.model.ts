import { Table, Column, Model, AllowNull, Unique, Default, Index } from 'sequelize-typescript';

@Table({ modelName: 'PriceQuotes', timestamps: true })
export default class PriceQuote extends Model<PriceQuote> {
  @AllowNull(false)
  @Index({
    name: 'tokenCurrency',
    unique: true
  })
  @Column
  token: string;

  @AllowNull(false)
  @Index({
    name: 'tokenCurrency',
    unique: true
  })
  @Column
  currency: string;

  @AllowNull(false)
  @Column
  price: number;
}