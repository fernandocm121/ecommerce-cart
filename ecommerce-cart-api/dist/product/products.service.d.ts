import { Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(updateProductDto: UpdateProductDto, id: string): Promise<Product>;
    delete(id: string): Promise<any>;
    findProduct(id: string): Promise<Product>;
    getProduct(productId: string): Promise<Product>;
    findAll(): Promise<Product[]>;
}
