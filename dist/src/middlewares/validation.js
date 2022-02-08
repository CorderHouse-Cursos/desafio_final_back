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
exports.idCartProductsAddValidate = exports.idCartValidate = exports.idProductValidate = exports.idValidate = exports.productValidate = void 0;
const Carts_1 = require("../models/Carts");
const Products_1 = require("../models/Products");
const manager_1 = require("../utils/manager");
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const cartManager = (0, manager_1.initManager)('carts', Carts_1.CartsModel);
const productManager = (0, manager_1.initManager)('products', Products_1.ProductosModel);
const productValidate = (req, res, next) => {
    const product = req.body;
    const photo = req.files;
    if (!product.nombre) {
        return res
            .status(statusCode_1.default.BAD_REQUEST)
            .json({ message: 'El nombre es requerido' });
        return;
    }
    if (!product.descripcion) {
        return res
            .status(statusCode_1.default.BAD_REQUEST)
            .json({ message: 'La descripcion es requerida' });
        return;
    }
    if (!product.codigo) {
        return res
            .status(statusCode_1.default.BAD_REQUEST)
            .json({ message: 'El codigo es requerido' });
    }
    if (!product.precio) {
        return res
            .status(statusCode_1.default.BAD_REQUEST)
            .json({ message: 'El precio es requerido' });
    }
    if (!product.stock) {
        return res
            .status(statusCode_1.default.BAD_REQUEST)
            .json({ message: 'El stock es requerido' });
    }
    console.log(photo);
    if (photo.length === 0) {
        return res
            .status(statusCode_1.default.BAD_REQUEST)
            .json({ message: 'La foto es requerida' });
    }
    if (photo[0].mimetype !== 'image/jpeg' && photo[0].mimetype !== 'image/png') {
        return res
            .status(statusCode_1.default.BAD_REQUEST)
            .json({ message: 'El archivo debe ser una imagen' });
    }
    next();
};
exports.productValidate = productValidate;
const idValidate = (req, res, next) => {
    if (!req.params.id && typeof req.params.id !== 'number') {
        return res.status(statusCode_1.default.OK).json({ message: 'El id debe ser un número' });
    }
    next();
};
exports.idValidate = idValidate;
const idProductValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pro = yield productManager.getById(req.params.id);
        if (!pro)
            throw new Error();
        next();
    }
    catch (err) {
        return res
            .status(statusCode_1.default.NOT_FOUND)
            .json({ message: 'No existe un producto con esa ID' });
    }
});
exports.idProductValidate = idProductValidate;
const idCartValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cartManager.getById(req.params.id);
        if (!cart)
            throw new Error();
    }
    catch (err) {
        return res
            .status(statusCode_1.default.NOT_FOUND)
            .json({ message: 'No existe un carrito con esa ID' });
    }
    next();
});
exports.idCartValidate = idCartValidate;
const idCartProductsAddValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pro = yield productManager.getById(req.params.productId);
        if (!pro)
            throw new Error();
    }
    catch (err) {
        console.log(err);
        return res
            .status(statusCode_1.default.NOT_FOUND)
            .json({ message: 'No existe un producto con ese Id' });
    }
    next();
});
exports.idCartProductsAddValidate = idCartProductsAddValidate;
