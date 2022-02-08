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
exports.MongoManager = void 0;
const errors_1 = require("../utils/errors");
class MongoManager {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.findOne({ id });
            return data;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data === undefined) {
                throw new errors_1.NotFound('No se encontró el elemento');
            }
            const newData = new this.model(data);
            const dataSaved = yield newData.save();
            return dataSaved.id;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield this.model.updateOne({ id }, data, {
                new: true,
            });
            if (!updated)
                throw new errors_1.NotFound('No se encontró el elemento');
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.model.findOneAndUpdate({ id });
            if (!deleted)
                throw new errors_1.NotFound('No se encontró el elemento');
        });
    }
}
exports.MongoManager = MongoManager;
