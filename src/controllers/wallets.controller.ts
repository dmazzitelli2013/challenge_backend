import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { WalletErrorInterceptor } from 'src/interceptors/wallet-error.interceptor';
import { Wallet } from '../models';
import { WalletsService } from '../services/wallets.service';

@Controller('wallets')
@UseInterceptors(WalletErrorInterceptor)
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Post()
  create(@Body() params: Wallet) {
    return this.walletsService.create(params);
  }
}
