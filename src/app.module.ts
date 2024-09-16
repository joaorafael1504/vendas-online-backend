import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UsearController } from './usear/usear.controller';

@Module({
  imports: [UserModule],
  controllers: [UsearController],
  providers: [],
})
export class AppModule {}
