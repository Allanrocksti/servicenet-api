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
const auth_1 = require("../../firebase/auth");
exports.default = [
    {
        path: '/main_user/:id',
        method: 'get',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            queries_1.pool.query(`SELECT * FROM main_user WHERE id_firebase = '${req.params.id}'`, (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            });
        })
    },
    {
        path: '/main_user',
        method: 'post',
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            const shouldAbort = (err) => {
                if (err) {
                    queries_1.pool.query('ROLLBACK', err => {
                        if (err) {
                            console.error('Error rolling back client', err.stack);
                        }
                        res.status(500).json(err);
                    });
                }
                return !!err;
            };
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            queries_1.pool.query(`BEGIN`, (error, results) => {
                shouldAbort(error);
                auth_1.doCreateUserWithEmailAndPassword(email, password)
                    .then(res => {
                    console.log(res.user);
                    console.log("###########################################");
                    console.log(res);
                    /* pool.query(`INSERT INTO main_user(id_firebase, name, email)
                                VALUES('${res.uid}', '${name}', '${email}');`, (error, results) => {
                        if (error) {
                            throw error
                        }
                        res.status(200).json(results.rows)
                    }) */
                }).catch(err => {
                    console.log(err);
                    shouldAbort(err);
                });
            });
            res.status(200);
        })
    }
];
//# sourceMappingURL=routes.js.map