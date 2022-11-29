import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  async create(@Body() createProductDto: CreateProductDto) {
    await this.productsService.create(createProductDto);
  }

  @Get('get')
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('/:id')
  async getProduct(@Param('id') id) {
    return this.productsService.getProduct(id);
  }

  @Patch('/:id')
  async update(@Body() updateProductDto: UpdateProductDto, @Param('id') id) {
    const product = await this.productsService.getProduct(id);

    return await this.productsService.update(updateProductDto, id);
  }

  @Delete('/:id')
  async delete(@Param('id') id) {
    await this.productsService.delete(id);
  }
}
