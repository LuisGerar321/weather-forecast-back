"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    apiVersion: process.env.API_VERSION || "v1",
    weatherApiKey: process.env.WEATHERAPIKEY || "",
    server: {
        port: Number(process.env.SERVER_PORT) || 3001,
        host: process.env.SERVER_HOST || "localhost",
    },
};
//# sourceMappingURL=index.js.map