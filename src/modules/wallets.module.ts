import { Module } from '@nestjs/common';
import { WalletsController } from '../controllers/wallets.controller';
import { WalletsService, EtherscanService } from '../services';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, EtherscanService]
})
export class WalletsModule {}
