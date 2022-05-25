import { Test, TestingModule } from '@nestjs/testing';
import { PriceQuotesController } from './price-quotes.controller';

describe('PriceQuotesController', () => {
  let controller: PriceQuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceQuotesController],
    }).compile();

    controller = module.get<PriceQuotesController>(PriceQuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
