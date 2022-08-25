import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {

	constructor(
		private readonly configService: ConfigService,
	) {
		const databaseHost = this.configService.get<string>('DATABASE_HOST');
		console.log(`CoffeesService: databaseHost = ${databaseHost}`);
	}

	private coffees: Coffee[] = [
		{
			id: 1,
			name: 'Shipwreck Roast',
			brand: 'Buddy Brew',
			flavors: ['chocolate', 'vanilla'],
		},
	];

	findAll() {
		return this.coffees;
	}

	findOne(id: string) {
		const coffee = this.coffees.find(item => item.id === +id);
		if (!coffee) {
			throw new NotFoundException(`Coffee #${id} not found`);
		}
		return coffee;
	}

	create(createCoffeeDto: any) {
		this.coffees.push(createCoffeeDto);
	}

	update(id: string, updateCoffeeDto: any) {
		const existingCoffee = this.findOne(id);
		if (existingCoffee) {
			// update the existing entity
		}
	}

	remove(id: string) {
		const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
		if (coffeeIndex >= 0) {
			this.coffees.splice(coffeeIndex, 1);
		}
	}
}

