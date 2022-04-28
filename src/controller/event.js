const Event = require('../models/event');
const User = require('../models/user');

exports.createNewEvent = async (req, res) => {
  const { email } = req.user;

  const { _id } = await User.findOne({ email }).exec();
  const {
    name,
    title,
    pictures,
    description,
    eventStartTime,
    eventEndTime,
    maxParticipant,
  } = req.body;

  const event = await new Event({
    name,
    title,
    pictures,
    description,
    eventStartTime,
    eventEndTime,
    maxParticipant,
    creator: _id,
  }).save();

  return res.send(event);
};

exports.getEvents = async (req, res) => {
  let event = await Event.find({}).exec();
  return res.send(event);
};

exports.getEventByID = async (req, res) => {
  let { eventId } = req.body;
  let eventById = await Event.findById(eventId);
  return res.send(eventById);
};
