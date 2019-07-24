"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const environment_1 = require("../environment/environment");
exports.pool = new pg_1.Pool({
    user: environment_1.environment.db.username,
    host: environment_1.environment.db.host,
    database: environment_1.environment.db.database,
    password: environment_1.environment.db.password,
    port: environment_1.environment.db.port,
    ssl: true
});
//# sourceMappingURL=queries.js.map