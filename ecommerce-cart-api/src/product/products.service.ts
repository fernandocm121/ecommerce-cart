import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const createdProduct = new this.productModel({
        name: createProductDto.name,
        description: createProductDto.description,
        quantity: createProductDto.quantity,
        src: createProductDto.src,
        price: createProductDto.price,
        createdAt: new Date().getTime(),
      });

      return await createdProduct.save();
    } catch (error) {
      throw new HttpException('Error creating product', HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    updateProductDto: UpdateProductDto,
    id: string,
  ): Promise<Product> {
    try {
      const product = await this.findProduct(id);

      product.name = updateProductDto.name;
      product.description = updateProductDto.description;
      product.quantity = updateProductDto.quantity;
      product.src = updateProductDto.src;
      product.price = updateProductDto.price;

      return await product.save();
    } catch (error) {
      throw new HttpException('Error updating product', HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return this.productModel.deleteOne({ _id: id });
    } catch (error) {
      throw new HttpException('Error deleting product', HttpStatus.BAD_REQUEST);
    }
  }

  async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
      return product || null;
    } catch (error) {
      return null;
    }
  }

  async getProduct(productId: string) {
    const product = await this.findProduct(productId);
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().select({ __v: 0 }).exec();
  }
}
