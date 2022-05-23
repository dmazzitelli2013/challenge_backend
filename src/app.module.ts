import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsController } from './wallets/wallets.controller';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [WalletsModule, ConfigModule.forRoot()],
  controllers: [AppController, WalletsController],
  providers: [AppService],
})
export class AppModule {}
