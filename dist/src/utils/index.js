"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanciateModel = void 0;
const Products_1 = require("../models/Products");
const Carts_1 = require("../models/Carts");
const constants_1 = require("./constants");
const models = {
    [constants_1.MODELS.PRODUCTS]: Products_1.ProductosModel,
    [constants_1.MODELS.CART]: Carts_1.CartsModel,
};
const instanciateModel = (name) => models[name];
exports.instanciateModel = instanciateModel;
