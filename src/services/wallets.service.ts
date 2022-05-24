import { Injectable } from '@nestjs/common';
import Wallet from '../models/wallet';

@Injectable()
export class WalletsService {
  async create(params): Promise<object> {
    const wallet = await Wallet.build(params)
    return wallet.toJSON();
  }
}
