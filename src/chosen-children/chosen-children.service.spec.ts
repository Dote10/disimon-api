import { Test, TestingModule } from '@nestjs/testing';
import { ChosenChildrenService } from './chosen-children.service';

describe('ChosenChildrenService', () => {
  let service: ChosenChildrenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChosenChildrenService],
    }).compile();

    service = module.get<ChosenChildrenService>(ChosenChildrenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
