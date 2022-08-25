import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import coffeesConfig from './config/coffees.config';

@Module({
  imports: [ConfigModule.forFeature(coffeesConfig)],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule { }
