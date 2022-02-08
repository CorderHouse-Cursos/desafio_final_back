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
const daos_1 = require("../daos");
const statusCode_1 = __importDefault(require("../utils/statusCode"));
const constants = __importStar(require("../utils/constants"));
const productManager = new daos_1.ProductDao();
exports.default = {
    getAll: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield productManager.getAll();
            res.status(statusCode_1.default.OK).json(products);
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }),
    getById: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield productManager.getById(req.params.id);
            res.status(statusCode_1.default.OK).json(product);
        }
        catch (err) {
            next(err);
        }
    }),
    create: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = req.body;
            const photo = req.files;
            const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`;
            product.foto = path;
            product.timestamp = new Date();
            yield productManager.create(product);
            res
                .status(statusCode_1.default.CREATED)
                .json({ message: 'Producto creado', product });
        }
        catch (err) {
            next(err);
        }
    }),
    update: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = req.body;
            const photo = req.files;
            const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`;
            product.foto = path;
            yield productManager.update(parseInt(req.params.id), product);
            res
                .status(statusCode_1.default.OK)
                .json({ message: 'Producto actualizado', product });
        }
        catch (err) {
            next(err);
        }
    }),
    delete: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield productManager.delete(parseInt(req.params.id));
            res.status(statusCode_1.default.OK).json({ message: 'Producto eliminado' });
        }
        catch (err) {
            next;
        }
    }),
};
