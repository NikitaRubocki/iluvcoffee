import { Body, Controller, Delete, Get, Param, Patch, Post, Query, SetMetadata } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
	constructor(private readonly coffeesService: CoffeesService) { }

	@Public()
	@Get()
	async findAll(@Query() paginationQuery) {
		await new Promise(resolve => setTimeout(resolve, 5000));
		const { limit, offset } = paginationQuery;
		return this.coffeesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: string) {
		console.log(id);
		return this.coffeesService.findOne(id);
	}

	@Post()
	create(@Body() createCoffeeDto: CreateCoffeeDto) {
		return this.coffeesService.create(createCoffeeDto);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
		return this.coffeesService.update(id, updateCoffeeDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.coffeesService.remove(id);
	}
}
