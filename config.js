'use strict';

import 'dotenv/config.js';
import assert from 'assert';

const {PORTA_HTTP, PORTA_HTTPS, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORTA_HTTP, 'Porta http é requerida !!!');
assert(HOST, 'Caminho do servidor requerido !!!');

export const config = () => {
    return {
        port: PORTA_HTTP,
        ports: PORTA_HTTPS,
        host: HOST,
        url: HOST_URL,
        sql: {
            server: SQL_SERVER,
            database: SQL_DATABASE,
            user: SQL_USER, 
            password: SQL_PASSWORD,
            options: {
                encrypt: sqlEncrypt,
                enableArithAbort: true
            }
        }
    }
}

export default config;