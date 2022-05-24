import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { WalletErrorInterceptor } from 'src/interceptors/wallet-error.interceptor';
import { WalletDTO } from '../models/wallet/';
import { WalletsService } from '../services/wallets.service';

@Controller('wallets')
@UseInterceptors(WalletErrorInterceptor)
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Post()
  create(@Body() params: WalletDTO) {
    return this.walletsService.create(params);
  }
}
