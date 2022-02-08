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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseConn = exports.databaseConn = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../utils/constants");
const admin = __importStar(require("firebase-admin"));
const coder_project_final_firebase_adminsdk_x6t5u_323560713a_json_1 = __importDefault(require("../config/coder-project-final-firebase-adminsdk-x6t5u-323560713a.json"));
const databaseConn = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default
        .connect(constants_1.DATABASE_URL)
        .then((con) => {
        console.log('conectado');
    })
        .catch((err) => {
        console.log(err);
    });
    mongoose_1.default.set('toJSON', {
        virtuals: true,
        transform: (doc, converted) => {
            delete converted._id;
            delete converted.__v;
        },
    });
});
exports.databaseConn = databaseConn;
const firebaseConn = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = admin.initializeApp({
        credential: admin.credential.cert(coder_project_final_firebase_adminsdk_x6t5u_323560713a_json_1.default),
        databaseURL: 'https://shop-b2b.firebaseio.com',
    });
    return app;
});
exports.firebaseConn = firebaseConn;
function init() {
    console.log(process.env.DATABASE);
    switch (process.env.DATABASE) {
        case 'mongo':
            (0, exports.databaseConn)();
            break;
        case 'firebase':
            (0, exports.firebaseConn)();
            break;
        default:
            break;
    }
}
exports.default = init;
