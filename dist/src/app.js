"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cartRoutes_1 = __importDefault(require("./routes/v1/cartRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/v1/productsRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/v1/indexRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: '*' }));
app.use('/', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
app.use('/api/user', indexRoutes_1.default);
app.use('/api/carrito', cartRoutes_1.default);
app.use('/api/productos', productsRoutes_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
