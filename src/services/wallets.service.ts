import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import Wallet from '../models/wallet.model';

@Injectable()
export class WalletsService {
  async findAll(query: any) {
    const sortParameters = this.getSortParameters(query);
    const wallets = await Wallet.findAll({ order: [sortParameters] });
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

  private getSortParameters(query): [string, string] {
    const validFields = Object.keys(Wallet.getAttributes());
    const field = query.field || 'createdAt';
    if (!validFields.includes(field)) {
      throw new BadRequestException('Invalid field');
    }

    const sort = query.sort || 'desc';
    if (!['DESC', 'ASC'].includes(sort.toUpperCase())) {
      throw new BadRequestException('Invalid sort mode');
    }

    return [field, sort.toUpperCase()];
  }
}
