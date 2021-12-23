"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataManager_1 = __importDefault(require("../services/DataManager"));
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const cartManager = new DataManager_1.default('carts');
const productManager = new DataManager_1.default('products');
exports.default = {
    getProductsInCartById: (req, res, next) => {
        try {
            const cart = cartManager.getById(parseInt(req.params.id));
            res.status(statusCode_1.default.OK).json(cart);
        }
        catch (err) {
            next(err);
        }
    },
    createCart: (req, res, next) => {
        try {
            const idCart = cartManager.create({
                id: 1,
                timestamp: new Date(),
                products: [],
            });
            res
                .status(statusCode_1.default.CREATED)
                .json({ message: 'Carrito creado', data: { id: idCart } });
        }
        catch (err) {
            next(err);
        }
    },
    deleteCart: (req, res, next) => {
        try {
            cartManager.delete(parseInt(req.params.id));
            res.status(statusCode_1.default.OK).json({ message: 'Carrito eliminado' });
        }
        catch (err) {
            next(err);
        }
    },
    addProductToCart: (req, res, next) => {
        try {
            const productId = productManager.getById(parseInt(req.params.productId));
            const cart = cartManager.getById(parseInt(req.params.id));
            cartManager.update(cart.id, {
                id: cart.id,
                timestamp: cart.timestamp,
                products: [...cart.products, productId],
            });
            res.status(statusCode_1.default.OK).json({ message: 'Producto agregado con exito' });
        }
        catch (err) {
            next(err);
        }
    },
    deleteProductFromCart: (req, res, next) => {
        try {
            const productId = parseInt(req.params.productId);
            const cart = cartManager.getById(parseInt(req.params.id));
            const cartFiltered = cart.products.filter((pro) => pro.id !== productId);
            cartManager.update(cart.id, {
                id: cart.id,
                timestamp: cart.timestamp,
                products: cartFiltered,
            });
            res
                .status(statusCode_1.default.OK)
                .json({ message: 'Producto eliminado con exito' });
        }
        catch (err) {
            next(err);
        }
    },
};
