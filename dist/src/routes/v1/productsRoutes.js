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
const express_1 = __importDefault(require("express"));
const productsController_1 = __importDefault(require("../../controllers/productsController"));
const validation = __importStar(require("../../middlewares/validation"));
const isAdmin_1 = __importDefault(require("../../middlewares/isAdmin"));
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("../../config/multer"));
const router = (0, express_1.default)();
router.get('/', productsController_1.default.getAll);
router.get('/:id', validation.idValidate, productsController_1.default.getById);
router.post('/', [
    isAdmin_1.default,
    (0, multer_1.default)({
        storage: multer_2.default,
    }).any(),
    validation.productValidate,
], productsController_1.default.create);
router.put('/:id', [
    isAdmin_1.default,
    validation.idValidate,
    (0, multer_1.default)({
        storage: multer_2.default,
    }).any(),
], productsController_1.default.update);
router.delete('/:id', [isAdmin_1.default, validation.idValidate], productsController_1.default.delete);
exports.default = router;
