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
        path: '/clients/:id',
        method: 'get',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            queries_1.pool.query(`SELECT * FROM client WHERE id_main_user = ${req.params.id}`, (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            });
        })
    },
    {
        path: '/client/:id',
        method: 'get',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            queries_1.pool.query(`SELECT * FROM client WHERE id_client = ${req.params.id}`, (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            });
        })
    },
    {
        path: '/client/:id',
        method: 'put',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const phone = req.body.phone;
            const street = req.body.street;
            const num = req.body.num;
            const city = req.body.city;
            const country_state = req.body.country_state;
            const country = req.body.country;
            const postalcode = req.body.postalcode;
            queries_1.pool.query(`UPDATE client
                        SET name = '${name}',
                            phone = '${phone}',
                            street = '${street}',
                            num = '${num}',
                            city = '${city}',
                            country_state = '${country_state}',
                            country = '${country}',
                            postalCode = '${postalcode}'
                        WHERE id_client = ${req.params.id}`, (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            });
        })
    },
    {
        path: '/client/:id',
        method: 'post',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const phone = req.body.phone;
            const id_main_user = req.params.id;
            const street = req.body.street;
            const num = req.body.num;
            const city = req.body.city;
            const country_state = req.body.country_state;
            const country = req.body.country;
            const postalcode = req.body.postalcode;
            queries_1.pool.query(`INSERT INTO client(name, phone, id_main_user, street, num, city, country_state, country, postalCode)
                        values('${name}', '${phone}', ${id_main_user}, '${street}', '${num}', '${city}', '${country_state}', '${country}', '${postalcode}')`, (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            });
        })
    },
    {
        path: '/client/:id',
        method: 'delete',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            queries_1.pool.query(`DELETE FROM client WHERE id_client = ${req.params.id}`, (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            });
        })
    },
];
//# sourceMappingURL=routes.js.map