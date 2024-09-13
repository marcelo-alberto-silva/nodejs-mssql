'use strict';

import { getEventos, getEventoById, insertEvento, updateEvento, deleteEvento } from '../data/events/index.js';

export async function getEvents (req, res, next) {    
    try {        
        const events = await getEventos();
        res.send(events);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export async function getEventId (req, res, next) {    
    try {        
        const eventId = req.params.id;
        const oneEvent = await getEventoById(eventId);
        res.send(oneEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export async function insertEvent (req, res, next) {    
    try {        
        const eventData = req.body;
        const insertEvent = await insertEvento(eventData);
        res.send(insertEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export async function updateEvent (req, res, next) {    
    try {        
        const eventData = req.body;
        const eventId = req.params.id;
        const updateEvent = await updateEvento(eventData, eventId);
        res.send(updateEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export async function deleteEvent (req, res, next) {    
    try {                
        const eventId = req.params.id;
        const deleteEvent = await deleteEvento(eventId);
        res.send(deleteEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default { getEvents, getEventId, insertEvent, updateEvent, deleteEvent } ;