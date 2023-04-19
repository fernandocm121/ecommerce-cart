"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSchema = void 0;
const mongoose = require("mongoose");
exports.ProductsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    quantity: Number,
    src: { type: [String], required: true },
    price: Number,
    createdAt: { type: String },
});
//# sourceMappingURL=product.schema.js.map