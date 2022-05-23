import { Injectable } from '@nestjs/common';
import WalletInstance from '../models/wallet';

@Injectable()
export class WalletsService {
  async create(address: string) {
    const wallet = await WalletInstance.create({ address: address });
    return wallet;
  }
}
