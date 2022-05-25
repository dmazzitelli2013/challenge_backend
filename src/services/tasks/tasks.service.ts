import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Wallet } from 'src/models';
import { WalletsService, EtherscanService } from '../';

@Injectable()
export class TasksService {
  constructor(
    private walletService: WalletsService,
    private etherscanService: EtherscanService,
  ) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async getPendingOldestTransactionDates() {
    this.walletService.getWalletsWithoutOldestTransaction().then((wallets) => {
      for (const wallet of wallets) {
        this.updateOldestTransactionDate(wallet);
      }
    });
  }

  private async updateOldestTransactionDate(wallet: Wallet) {
    const oldestTransactionDate = await this.etherscanService.getOldestTransactionDate(wallet.address);
    wallet.update({ oldestTransactionDate: oldestTransactionDate });
  }
}
