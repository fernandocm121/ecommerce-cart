"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(createProductDto) {
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
        }
        catch (error) {
            throw new common_1.HttpException('Error creating product', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(updateProductDto, id) {
        try {
            const product = await this.findProduct(id);
            product.name = updateProductDto.name;
            product.description = updateProductDto.description;
            product.quantity = updateProductDto.quantity;
            product.src = updateProductDto.src;
            product.price = updateProductDto.price;
            return await product.save();
        }
        catch (error) {
            throw new common_1.HttpException('Error updating product', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            return this.productModel.deleteOne({ _id: id });
        }
        catch (error) {
            throw new common_1.HttpException('Error deleting product', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findProduct(id) {
        let product;
        try {
            product = await this.productModel.findById(id).exec();
            return product || null;
        }
        catch (error) {
            return null;
        }
    }
    async getProduct(productId) {
        const product = await this.findProduct(productId);
        if (!product) {
            throw new common_1.NotFoundException('Could not find product');
        }
        return product;
    }
    async findAll() {
        return this.productModel.find().select({ __v: 0 }).exec();
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map