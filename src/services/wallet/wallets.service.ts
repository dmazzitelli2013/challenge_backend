import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Wallet } from '../../models';
import { EtherscanService } from '../etherscan/etherscan.service';

@Injectable()
export class WalletsService {
  constructor(private etherscanService: EtherscanService) {}

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
    const oldestTransactionDate =
      await this.etherscanService.getOldestTransactionDate(params.address);
    await wallet.update({ oldestTransactionDate: oldestTransactionDate });
    return wallet.toJSON();
  }

  async updateFavorite(id: number, isFavorite: boolean) {
    const wallet = await this.getWallet(id);
    wallet.update({ isFavorite: isFavorite });
    return wallet.toJSON();
  }

  async getWalletsWithoutOldestTransaction(): Promise<Wallet[]> {
    return await Wallet.findAll({ where: { oldestTransactionDate: null } });
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
