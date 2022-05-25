import {
  Controller,
  Post,
  Put,
  Body,
  UseInterceptors,
  Param,
  ParseIntPipe,
  Get,
  Query,
} from '@nestjs/common';
import { WalletErrorInterceptor } from 'src/interceptors/wallet-error.interceptor';
import { Wallet } from '../models';
import { WalletsService } from '../services/wallets.service';

@Controller('wallets')
@UseInterceptors(WalletErrorInterceptor)
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Get()
  findAll(@Query() query) {
    return this.walletsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.walletsService.findOne(id);
  }

  @Post()
  create(@Body() params: Wallet) {
    return this.walletsService.create(params);
  }

  @Put('favorite/:id')
  favorite(@Param('id', ParseIntPipe) id: number) {
    return this.walletsService.updateFavorite(id, true);
  }

  @Put('unfavorite/:id')
  unfavorite(@Param('id') id: number) {
    return this.walletsService.updateFavorite(id, false);
  }
}
