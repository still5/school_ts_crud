//main methods (CRUD) + db connection, imports stuff from models.ts
//const env = require('dotenv').config({path: './.env'});
/*const Pool = require('pg').Pool
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})
*/
/*pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows)
    })
  })
*/

import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: 'postgres://process.env.DB_USER:process.env.DB_PASSWORD@process.env.DB_HOST:process.env.DB_PORT/process.env.DB_NAME',
    idleTimeoutMillis: 30000
});

import "reflect-metadata";
import {createConnection} from "typeorm";
//import {Photo} from "./entity/Photo";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "KyfKASDJ76",
    database: "school1",
    entities: [
        
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    console.log('Connected to DB');
}).catch(error => console.log(error));