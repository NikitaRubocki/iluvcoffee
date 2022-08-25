import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {

	constructor(
		@Inject(coffeesConfig.KEY)
		private readonly coffeesConfiguration: ConfigType<typeof coffeesConfig>,
	) {
		console.log(coffeesConfiguration.foo);
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

