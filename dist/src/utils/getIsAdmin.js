"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getIsAdmin() {
    const file = path_1.default.join(__dirname, '../data/data.json');
    if (fs_1.default.existsSync(file)) {
        return JSON.parse(fs_1.default.readFileSync(file, 'utf8')).isAdmin;
    }
    return false;
}
exports.default = getIsAdmin;
