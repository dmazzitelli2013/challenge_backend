import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import Wallet from '../models/wallet.model';

@Injectable()
export class WalletsService {
  async findAll(query: any) {
    // TODO: use query to sort
    const wallets = await Wallet.findAll();
    return wallets.map((wallet) => wallet.toJSON());
  }

  async findOne(id: number) {
    const wallet = await this.getWallet(id);
    return wallet.toJSON();
  }

  async create(params: Wallet) {
    const wallet = await Wallet.create(params);
    return wallet.toJSON();
  }

  async updateFavorite(id: number, isFavorite: boolean) {
    const wallet = await this.getWallet(id);
    wallet.update({ isFavorite: isFavorite });
    return wallet.toJSON();
  }

  private async getWallet(id: number) {
    const wallet = await Wallet.findOne({ where: { id: id } });
    if (!wallet) {
      throw new UnprocessableEntityException('Wallet ID not found');
    }
    return wallet;
  }
}
