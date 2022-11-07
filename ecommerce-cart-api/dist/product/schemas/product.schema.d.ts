import * as mongoose from 'mongoose';
export declare const ProductsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    createdAt: string;
    description?: string;
    quantity?: number;
    src?: string;
    price?: number;
}>;
