import { Pool } from 'pg'
import { environment } from '../environment/environment';

export const pool = new Pool({
    user: environment.db.username,
    host: environment.db.host,
    database: environment.db.database,
    password: environment.db.password,
    port: environment.db.port,
    ssl: true
})
