import { Module } from '@nestjs/common';
import { ChosenChildrenController } from './chosen-children.controller';
import { ChosenChildrenService } from './chosen-children.service';

@Module({
  controllers: [ChosenChildrenController],
  providers: [ChosenChildrenService]
})
export class ChosenChildrenModule {}
