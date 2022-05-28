const express = require('express');
const {
  createNewEvent,
  getEvents,
  getEventByID,
  getEventByUser,
} = require('../controller/event');
const { authCheck } = require('../middleware/auth');
const router = express.Router();

router.post('/create-new-event', authCheck, createNewEvent);
router.post('/getAllEvents', getEvents);
router.post('/getEventById', getEventByID);
router.post('/getEventByUser', authCheck, getEventByUser);

module.exports = router;
