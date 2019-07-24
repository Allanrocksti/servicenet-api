"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("firebase/app"));
require("firebase/auth");
require("firebase/database");
const environment_1 = require("../../environment/environment");
if (!firebase.apps.length) {
    firebase.initializeApp(environment_1.environment.firebase);
}
exports.auth = firebase.auth();
//# sourceMappingURL=firebase.js.map