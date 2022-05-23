import { Injectable } from '@nestjs/common';
import Wallet from '../models/wallet';

@Injectable()
export class WalletsService {
  async create(address: string) {
    const wallet = await Wallet.create({ address: address });
    return wallet;
  }
}
