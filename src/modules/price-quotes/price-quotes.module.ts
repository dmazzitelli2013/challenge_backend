import { Module } from '@nestjs/common';
import { PriceQuotesController } from 'src/controllers';
import { PriceQuotesService } from 'src/services';

@Module({
  controllers: [PriceQuotesController],
  providers: [PriceQuotesService]
})
export class PriceQuotesModule {}
