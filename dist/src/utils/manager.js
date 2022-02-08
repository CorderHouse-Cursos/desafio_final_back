"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initManager = void 0;
const FirebaseManager_1 = require("../containers/FirebaseManager");
const MongoManager_1 = require("../containers/MongoManager");
const DataManager_1 = __importDefault(require("../containers/DataManager"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("../config/database"));
dotenv_1.default.config();
(0, database_1.default)();
function initManager(name, model) {
    const database = process.env.DATABASE;
    switch (database) {
        case 'mongo':
            return new MongoManager_1.MongoManager(name, model);
        case 'firebase':
            return new FirebaseManager_1.FirebaseManager(name);
        default:
            return new DataManager_1.default(name);
    }
}
exports.initManager = initManager;
