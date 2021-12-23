"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_URL = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.SERVER_URL = process.env.SERVER_URL || `http://localhost:${exports.PORT}`;
