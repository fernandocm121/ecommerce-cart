import { Document } from 'mongoose';
export interface Product extends Document {
    id: string;
    name: string;
    description: string;
    quantity: number;
    src: string[];
    price: number;
    createdAt: string;
}
