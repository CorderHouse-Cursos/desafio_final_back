"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const es_1 = __importDefault(require("./es"));
const en_1 = __importDefault(require("./en"));
// select language
const lang = 'es';
exports.default = lang === 'es' ? es_1.default : en_1.default;
