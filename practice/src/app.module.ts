import { Module } from '@nestjs/common';
import { TestController } from './users.controller';

@Module({
  controllers: [TestController],
})
export class AppModule {}
