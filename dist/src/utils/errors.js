"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.Forbidden = exports.Unauthorized = exports.BadRequest = exports.NotFound = exports.GeneralErrors = void 0;
class GeneralErrors extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}
exports.GeneralErrors = GeneralErrors;
class NotFound extends GeneralErrors {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}
exports.NotFound = NotFound;
class BadRequest extends GeneralErrors {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}
exports.BadRequest = BadRequest;
class Unauthorized extends GeneralErrors {
    constructor(message) {
        super(message);
        this.status = 401;
    }
}
exports.Unauthorized = Unauthorized;
class Forbidden extends GeneralErrors {
    constructor(message) {
        super(message);
        this.status = 403;
    }
}
exports.Forbidden = Forbidden;
class InternalServerError extends GeneralErrors {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}
exports.InternalServerError = InternalServerError;
