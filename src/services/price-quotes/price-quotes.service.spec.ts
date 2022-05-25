import { Test, TestingModule } from '@nestjs/testing';
import { PriceQuotesService } from './price-quotes.service';

describe('PriceQuotesService', () => {
  let service: PriceQuotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceQuotesService],
    }).compile();

    service = module.get<PriceQuotesService>(PriceQuotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
