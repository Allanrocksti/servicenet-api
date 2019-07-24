"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("./firebase");
exports.doCreateUserWithEmailAndPassword = (email, password) => firebase_1.auth.createUserWithEmailAndPassword(email, password);
//# sourceMappingURL=auth.js.map