"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_URL = exports.SERVER_URL = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.SERVER_URL = process.env.SERVER_URL || `http://localhost:${exports.PORT}`;
exports.DB_URL = process.env.DB_URL ||
    'mongodb://mongodb:mongodb@localhost:27017/mongodb?authSource=admin';
