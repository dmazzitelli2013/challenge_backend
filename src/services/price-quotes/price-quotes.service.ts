import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PriceQuote } from 'src/models';

@Injectable()
export class PriceQuotesService {
  async findAll() {
    const priceQuotes = await PriceQuote.findAll();
    return priceQuotes.map((priceQuote) => priceQuote.toJSON());
  }

  async findOne(id: number) {
    const priceQuote = await this.getPriceQuote(id);
    return priceQuote.toJSON();
  }

  async create(params: PriceQuote) {
    const priceQuote = await PriceQuote.create(params);
    return priceQuote.toJSON();
  }

  async updatePrice(id: number, price: number) {
    const priceQuote = await this.getPriceQuote(id);
    priceQuote.update({ price: price });
    return priceQuote.toJSON();
  }

  private async getPriceQuote(id: number) {
    const priceQuote = await PriceQuote.findOne({ where: { id: id } });
    if (!priceQuote) {
      throw new UnprocessableEntityException('PriceQuote ID not found');
    }
    return priceQuote;
  }
}
