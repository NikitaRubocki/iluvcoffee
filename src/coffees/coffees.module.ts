import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  imports: [ConfigModule],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule { }
