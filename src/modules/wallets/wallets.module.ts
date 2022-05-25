import { Module } from '@nestjs/common';
import { WalletsController } from 'src/controllers';
import { WalletsService, EtherscanService, TasksService } from 'src/services';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, EtherscanService, TasksService]
})
export class WalletsModule {}
