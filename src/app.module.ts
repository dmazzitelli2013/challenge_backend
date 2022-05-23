import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WalletsController } from './wallets/wallets.controller';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [WalletsModule, ConfigModule.forRoot()],
  controllers: [WalletsController],
})
export class AppModule {}
