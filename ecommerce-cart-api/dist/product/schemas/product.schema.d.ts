import * as mongoose from 'mongoose';
export declare const ProductsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    src: string[];
    description?: string;
    quantity?: number;
    price?: number;
    createdAt?: string;
}>;
