"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const daos_1 = require("../daos");
const cartManager = new daos_1.CartsDao();
const productManager = new daos_1.ProductDao();
exports.default = {
    getProductsInCartById: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const cart = yield cartManager.getById(req.params.id);
            res.status(statusCode_1.default.OK).json(cart);
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }),
    createCart: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const idCart = yield cartManager.create({
                id: 1,
                timestamp: new Date(),
                products: [],
            });
            res
                .status(statusCode_1.default.CREATED)
                .json({ message: 'Carrito creado', data: { id: idCart } });
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }),
    deleteCart: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            cartManager.delete(req.params.id);
            res.status(statusCode_1.default.OK).json({ message: 'Carrito eliminado' });
        }
        catch (err) {
            next(err);
        }
    }),
    addProductToCart: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id, productId } = req.params;
            const product = yield productManager.getById(productId);
            const cart = yield cartManager.getById(id);
            yield cartManager.update(cart.id, {
                id: cart.id,
                timestamp: cart.timestamp,
                products: cart.products.length > 0 ? [...cart.products, product] : [product],
            });
            return res.status(statusCode_1.default.OK).json({ message: 'Producto agregado con exito' });
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }),
    deleteProductFromCart: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const productId = req.params.productId;
            const cart = yield cartManager.getById(req.params.id);
            const cartFiltered = cart.products.filter((pro) => {
                var _a;
                if (pro.id) {
                    return pro.id !== productId;
                }
                else {
                    return ((_a = pro._id) === null || _a === void 0 ? void 0 : _a.toString()) !== productId;
                }
            });
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
    }),
};
