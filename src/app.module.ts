import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChosenChildrenModule } from './chosen-children/chosen-children.module';

@Module({
  imports: [UsersModule, ChosenChildrenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
