"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataManager_1 = __importDefault(require("../services/DataManager"));
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const constants = __importStar(require("../utils/constants"));
const productManager = new DataManager_1.default('products');
productManager.getAll();
exports.default = {
    getAll: (req, res, next) => {
        try {
            const products = productManager.getAll();
            res.status(statusCode_1.default.OK).json(products);
        }
        catch (err) {
            next(err);
        }
    },
    getById: (req, res, next) => {
        try {
            const product = productManager.getById(parseInt(req.params.id));
            res.status(statusCode_1.default.OK).json(product);
        }
        catch (err) {
            next(err);
        }
    },
    create: (req, res, next) => {
        try {
            const product = req.body;
            const photo = req.files;
            const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`;
            product.foto = path;
            product.timestamp = new Date();
            productManager.create(product);
            res
                .status(statusCode_1.default.CREATED)
                .json({ message: 'Producto creado', product });
        }
        catch (err) {
            next(err);
        }
    },
    update: (req, res, next) => {
        try {
            const product = req.body;
            const photo = req.files;
            const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`;
            product.foto = path;
            productManager.update(parseInt(req.params.id), product);
            res
                .status(statusCode_1.default.OK)
                .json({ message: 'Producto actualizado', product });
        }
        catch (err) {
            next(err);
        }
    },
    delete: (req, res, next) => {
        try {
            productManager.delete(parseInt(req.params.id));
            res.status(statusCode_1.default.OK).json({ message: 'Producto eliminado' });
        }
        catch (err) {
            next;
        }
    },
};
