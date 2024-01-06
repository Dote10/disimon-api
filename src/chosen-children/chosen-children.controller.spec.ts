import { Test, TestingModule } from '@nestjs/testing';
import { ChosenChildrenController } from './chosen-children.controller';

describe('ChosenChildrenController', () => {
  let controller: ChosenChildrenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChosenChildrenController],
    }).compile();

    controller = module.get<ChosenChildrenController>(ChosenChildrenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
