"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getIsAdmin_1 = __importDefault(require("../utils/getIsAdmin"));
function isAdmin(req, res, next) {
    if ((0, getIsAdmin_1.default)()) {
        next();
    }
    else {
        res
            .status(401)
            .json({ message: 'No tienes permisos para hacer esta peticion' });
    }
}
exports.default = isAdmin;
