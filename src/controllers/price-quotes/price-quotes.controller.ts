import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  UseInterceptors,
  Param,
  ParseIntPipe,
  Query,
  ParseFloatPipe,
} from '@nestjs/common';
import { PriceQuoteErrorInterceptor } from 'src/interceptors';
import { PriceQuote } from 'src/models';
import { PriceQuotesService } from 'src/services';

@Controller('price-quotes')
@UseInterceptors(PriceQuoteErrorInterceptor)
export class PriceQuotesController {
  constructor(private priceQuoteService: PriceQuotesService) {}

  @Get()
  findAll() {
    return this.priceQuoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.priceQuoteService.findOne(id);
  }

  @Post()
  create(@Body() params: PriceQuote) {
    return this.priceQuoteService.create(params);
  }

  @Put(':id')
  favorite(@Param('id', ParseIntPipe) id: number, @Body('price', ParseFloatPipe) price: number) {
    return this.priceQuoteService.updatePrice(id, price);
  }
}
