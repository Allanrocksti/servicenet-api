"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const services_1 = __importDefault(require("./services"));
const middleware_1 = __importDefault(require("./middleware"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const utils_1 = require("./utils");
process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1);
});
process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
utils_1.applyMiddleware(errorHandlers_1.default, router);
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer(router);
server.listen(PORT, () => {
    console.log(`O servidor está rodando em: http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map