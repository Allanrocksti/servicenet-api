"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("../../queries");
exports.default = [
    {
        path: '/',
        method: 'get',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            queries_1.pool.query('SELECT * FROM client', (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            });
        })
    }
];
//# sourceMappingURL=routes.js.map