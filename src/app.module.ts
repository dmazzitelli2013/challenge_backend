import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { WalletsModule } from 'src/modules';

@Module({
  imports: [WalletsModule, ScheduleModule.forRoot()]
})
export class AppModule {}
