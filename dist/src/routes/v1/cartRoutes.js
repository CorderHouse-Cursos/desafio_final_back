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
const cartController_1 = __importDefault(require("../../controllers/cartController"));
const validation = __importStar(require("../../middlewares/validation"));
const router = (0, express_1.default)();
router.post('/', cartController_1.default.createCart);
router.delete('/:id', validation.idCartValidate, cartController_1.default.deleteCart);
router.get('/:id/productos', validation.idCartValidate, cartController_1.default.getProductsInCartById);
router.post('/:id/productos/:productId', [validation.idCartValidate, validation.idCartProductsAddValidate], cartController_1.default.addProductToCart);
router.delete('/:id/productos/:productId', [validation.idCartValidate, validation.idCartProductsAddValidate], cartController_1.default.deleteProductFromCart);
exports.default = router;
