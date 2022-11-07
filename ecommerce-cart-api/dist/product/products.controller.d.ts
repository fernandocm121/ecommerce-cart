import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<void>;
    findAll(): Promise<Product[]>;
    update(updateProductDto: UpdateProductDto, id: any): Promise<Product>;
    delete(id: any): Promise<void>;
}
