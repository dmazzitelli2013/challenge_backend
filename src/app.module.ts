import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { WalletsModule } from './modules/wallets.module';

@Module({
  imports: [WalletsModule, ScheduleModule.forRoot()]
})
export class AppModule {}
