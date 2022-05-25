import { Module } from '@nestjs/common';
import { WalletsController } from '../controllers/wallets.controller';
import { WalletsService, EtherscanService, TasksService } from '../services';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, EtherscanService, TasksService]
})
export class WalletsModule {}
