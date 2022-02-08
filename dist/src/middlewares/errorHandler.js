"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal server error';
    const error = {
        message: message,
        status: status,
    };
    res.status(status).json(error);
};
exports.errorHandler = errorHandler;
