'user strict';

import express  from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import https from 'https';
import { LogApp } from './myfunction/MyLog.js';
import { DateTimeNow } from './myfunction/DateTimeNow.js';
import config from '../config.js';

// Importa as rotas que serão usadas
import eventRoutes  from '../routes/eventRoutes.js';
import userRoutes from '../routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

// Adiciona várias rotas a API
app.use('/api', eventRoutes);
app.use('/api', userRoutes);

var datahora = await DateTimeNow();     
var cfg = config();

app.listen(cfg.port, async () => {    
    await LogApp('Api MSSQL rodando em http na versão 2024-08-A na porta ' + cfg.port + ' em ' + datahora, 'info');
  }
);

https.createServer({
    cert: fs.readFileSync('./src/ssl/code.crt'),
    key: fs.readFileSync('./src/ssl/code.key')
}, app).listen(cfg.ports, async () => {      
    await LogApp('Api MSSQL rodando em https na versão 2024-08-A na porta ' + cfg.ports + ' em ' + datahora, 'info');
  }
);