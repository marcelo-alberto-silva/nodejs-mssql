'use strict';

import { Router } from 'express';
//import { getEvents, getEventId, insertEvent, updateEvent, deleteEvent  } from '../controllers/eventController.js';

const userRoutes = Router();

//eventRoutes.get('/events', getEvents);
//eventRoutes.get('/events/:id', getEventId);
//eventRoutes.post('/events', insertEvent);
//eventRoutes.put('/events/:id', updateEvent);
//eventRoutes.delete('/events/:id', deleteEvent);

userRoutes.get('/users', async (req, res, next) => {
    res.status(200).send({'status': true});
} );

export default userRoutes;