import { Controller, Post, Body } from '@nestjs/common';
import { WalletsService } from '../services/wallets.service';

@Controller('wallets')
export class WalletsController {
    constructor(private walletsService: WalletsService) {}

    @Post()
    create(@Body() params) {
        return this.walletsService.create(params);
    }

}
