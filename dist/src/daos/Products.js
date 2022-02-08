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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDao = void 0;
const Products_1 = require("../models/Products");
const manager_1 = require("../utils/manager");
const productManager = (0, manager_1.initManager)('products', Products_1.ProductosModel);
class ProductDao {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productManager.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productManager.getById(id);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productManager.create(data);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield productManager.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield productManager.delete(id);
        });
    }
}
exports.ProductDao = ProductDao;
