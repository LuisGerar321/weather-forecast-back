"use strict";
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
exports.setupServer = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const { apiVersion } = config_1.config; //v1
const { port, host } = config_1.config.server;
const server = (0, express_1.default)();
server.use((0, express_2.json)());
server.use((0, cors_1.default)());
server.get(`/${apiVersion}/test`, (req, res) => {
    try {
        return res.status(200).send({
            status: 200,
            message: "Server running well.",
            data: "",
        });
    }
    catch (error) {
        console.error(error);
        res.send(500).send({
            status: 500,
            message: "Internal Server Error",
        });
    }
});
const setupServer = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        server.listen(port, host, () => {
            console.log(`Server running at http://${host}:${port}`);
            resolve();
        });
    });
});
exports.setupServer = setupServer;
//# sourceMappingURL=server.js.map