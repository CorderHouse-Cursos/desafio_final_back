"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const errors_1 = require("../utils/errors");
class DataManager {
    constructor(name) {
        this.data = [];
        this.allDataFIle = {};
        this.file = path_1.default.join(__dirname, '../data/data.json');
        this.name = name;
        this._loadData();
    }
    _loadData() {
        console.log(this.file);
        if (fs_1.default.existsSync(this.file)) {
            this.data = JSON.parse(fs_1.default.readFileSync(this.file, 'utf8'))[this.name];
            this.allDataFIle = JSON.parse(fs_1.default.readFileSync(this.file, 'utf8'));
        }
    }
    _saveData() {
        fs_1.default.writeFileSync(this.file, JSON.stringify(Object.assign(Object.assign({}, this.allDataFIle), { [this.name]: this.data })));
    }
    getAll() {
        if (this.data === undefined) {
            return [];
        }
        return this.data;
    }
    getById(id) {
        if (this.data === undefined) {
            throw new errors_1.NotFound('No se encontró el elemento');
        }
        const index = this.data.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new errors_1.NotFound('No se encontró el elemento');
        }
        return this.data[index];
    }
    create(data) {
        if (this.data === undefined) {
            throw new errors_1.NotFound('No se encontró el elemento');
        }
        const id = this.data.length > 0
            ? this.data[this.data.length - 1].id + 1
            : 1;
        this.data.push(Object.assign(Object.assign({}, data), { id }));
        this._saveData();
        return id;
    }
    update(id, data) {
        if (this.data === undefined) {
            throw new errors_1.NotFound('No se encontró el elemento');
        }
        const index = this.data.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new errors_1.NotFound('No se encontró el elemento');
        }
        const oldData = this.data[index];
        this.data[index] = Object.assign(Object.assign(Object.assign({}, oldData), data), { id });
        this._saveData();
    }
    delete(id) {
        if (this.data === undefined) {
            throw new errors_1.NotFound('No se encontró el elemento');
        }
        const index = this.data.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new errors_1.NotFound('No se encontró el elemento');
        }
        this.data.splice(index, 1);
        this._saveData();
    }
}
exports.default = DataManager;
