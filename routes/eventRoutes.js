'use strict';

import { Router } from 'express';
import { getEvents, getEventId, insertEvent, updateEvent, deleteEvent  } from '../controllers/eventController.js';

const eventRoutes = Router();

eventRoutes.get('/events', getEvents);
eventRoutes.get('/events/:id', getEventId);
eventRoutes.post('/events', insertEvent);
eventRoutes.put('/events/:id', updateEvent);
eventRoutes.delete('/events/:id', deleteEvent);

export default eventRoutes;