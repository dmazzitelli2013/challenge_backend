import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { WalletsModule, PriceQuotesModule } from 'src/modules';

@Module({
  imports: [WalletsModule, PriceQuotesModule, ScheduleModule.forRoot()],
})
export class AppModule {}
