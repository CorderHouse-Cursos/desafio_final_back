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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseManager = void 0;
const errors_1 = require("../utils/errors");
const admin = __importStar(require("firebase-admin"));
class FirebaseManager {
    constructor(name) {
        this.db = admin.firestore();
        this.model = this.db.collection(name);
        this.name = name;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const querySnapshot = yield this.model.get();
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(Object.assign(Object.assign({}, doc.data()), { id: doc.id }));
            });
            return data;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = this.model.doc(id);
            const item = yield doc.get();
            if (!item.data())
                throw new errors_1.NotFound('No se encontró el elemento');
            return Object.assign({ id: doc.id }, item.data());
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data === undefined) {
                throw new errors_1.NotFound('No se encontró el elemento');
            }
            const doc = this.model.doc();
            data['id'] = doc.id;
            yield doc.create(data);
            return doc.id;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = this.model.doc(id);
            const retrieve = yield doc.get();
            if (!retrieve.data())
                throw new errors_1.NotFound('No se encontró el elemento');
            yield doc.update(data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield this.model.doc(id.toString());
            if (!doc)
                throw new errors_1.NotFound('No se encontró el elemento');
            yield doc.delete();
        });
    }
}
exports.FirebaseManager = FirebaseManager;
