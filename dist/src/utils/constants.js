"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODELS = exports.DATABASE_URL = exports.SERVER_URL = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.SERVER_URL = process.env.SERVER_URL || `http://localhost:${exports.PORT}`;
exports.DATABASE_URL = process.env.DATABASE_URL ||
    'mongodb+srv://adminCoder:adminCoder@cluster0.urhvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
exports.MODELS = {
    PRODUCTS: 'Productos',
    CART: 'Carts',
};
