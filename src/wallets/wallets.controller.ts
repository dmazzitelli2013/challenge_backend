import { Controller, Post } from '@nestjs/common';

@Controller('wallets')
export class WalletsController {
    @Post()
    create(): string {
        return 'hello';
    }

}
