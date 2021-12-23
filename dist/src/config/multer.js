"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path_1.default.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, callback) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            callback(null, file.fieldname +
                '-' +
                Date.now() +
                '.' +
                file.originalname.split('.')[file.originalname.split('.').length - 1]);
        }
        else {
            callback(new Error('El archivo debe ser una imagen'), '');
        }
    },
});
exports.default = storage;
