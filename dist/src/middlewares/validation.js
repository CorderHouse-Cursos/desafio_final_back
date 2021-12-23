"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idCartProductsAddValidate = exports.idCartValidate = exports.idProductValidate = exports.idValidate = exports.productValidate = void 0;
const DataManager_1 = __importDefault(require("../services/DataManager"));
const statusCode_1 = __importDefault(require("../utils/statusCode"));
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
        res.status(statusCode_1.default.OK).json({ message: 'El id debe ser un número' });
    }
    next();
};
exports.idValidate = idValidate;
const idProductValidate = (req, res, next) => {
    const productManager = new DataManager_1.default('products');
    try {
        productManager.getById(parseInt(req.params.id));
    }
    catch (err) {
        res
            .status(statusCode_1.default.NOT_FOUND)
            .json({ message: 'No existe un producto con esa ID' });
    }
    next();
};
exports.idProductValidate = idProductValidate;
const idCartValidate = (req, res, next) => {
    const cartManager = new DataManager_1.default('carts');
    try {
        const cart = cartManager.getById(parseInt(req.params.id));
    }
    catch (err) {
        res
            .status(statusCode_1.default.NOT_FOUND)
            .json({ message: 'No existe un carrito con esa ID' });
    }
    next();
};
exports.idCartValidate = idCartValidate;
const idCartProductsAddValidate = (req, res, next) => {
    const productManager = new DataManager_1.default('products');
    next();
    try {
        const pro = productManager.getById(parseInt(req.params.productId));
        console.log(pro);
    }
    catch (err) {
        res
            .status(statusCode_1.default.NOT_FOUND)
            .json({ message: 'No existe un producto con ese Id' });
    }
    next();
};
exports.idCartProductsAddValidate = idCartProductsAddValidate;
