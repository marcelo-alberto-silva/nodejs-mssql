'use strict';

import { loadSqlQueries } from '../utils.js';
import config from '../../config.js';
import sql from 'mssql';

export async function getEventos () {
    try {                
        let cfg = config();
        let pool = await sql.connect(cfg.sql);
        const sqlQueries = await loadSqlQueries('events');        
        const list = await pool.request().query(sqlQueries.eventslist);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

export async function getEventoById (id) {
    try {                
        let cfg = config();
        let pool = await sql.connect(cfg.sql);
        const sqlQueries = await loadSqlQueries('events');        
        const oneEvent = await pool.request()
            .input('IdHistorico', sql.Int, id)
            .query(sqlQueries.eventbyid);
        return oneEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

export async function insertEvento (postData) {
    try {                
        let cfg = config();
        let pool = await sql.connect(cfg.sql);
        const sqlQueries = await loadSqlQueries('events');
        const insertEvent = await pool.request()
            .input('Nome', sql.NVarChar(60), postData.nome)
            .input('IdCondominio', sql.Int, postData.id_condominio)
            .input('IdPlanoConta', sql.Int, postData.id_plano_conta)
            .input('TipoMovimento', sql.NChar(1), postData.tipo_movimento)
            .input('CodHistorico', sql.NVarChar(10), postData.codigo_historico)
            .query(sqlQueries.createEvent);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

export async function updateEvento (postData, id) {
    try {                
        let cfg = config();
        let pool = await sql.connect(cfg.sql);
        const sqlQueries = await loadSqlQueries('events');
        const updateEvent = await pool.request()
            .input('IdHistorico', sql.Int, id)
            .input('Nome', sql.NVarChar(60), postData.nome)
            .input('IdCondominio', sql.Int, postData.id_condominio)
            .input('IdPlanoConta', sql.Int, postData.id_plano_conta)
            .input('TipoMovimento', sql.NChar(1), postData.tipo_movimento)
            .input('CodHistorico', sql.NVarChar(10), postData.codigo_historico)
            .query(sqlQueries.updateEvent);
        return updateEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

export async function deleteEvento (id) {
    try {                
        let cfg = config();
        let pool = await sql.connect(cfg.sql);
        const sqlQueries = await loadSqlQueries('events');
        const deleteEvent = await pool.request()
            .input('IdHistorico', sql.Int, id)            
            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

export default { getEventos, getEventoById, insertEvento, updateEvento, deleteEvento };