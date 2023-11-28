import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { userController } from './users.controller';

@Module({
  controllers: [TestController,userController],
})
export class AppModule {}
