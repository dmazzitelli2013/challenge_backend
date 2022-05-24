import { Module } from '@nestjs/common';
import { WalletsModule } from './modules/wallets.module';

@Module({
  imports: [WalletsModule],
})
export class AppModule {}
