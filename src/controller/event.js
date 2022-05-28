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

// exports.editEvent = async (req,res) =>{
//   const {eventId, isDelete, } = req.body;
//   const {userId} = req.user;
//   const event = await Event.findById({id: eventId}).exec();
//   if(event.creator != userId){
//     return res.status(400).json({
//       body: "Error"
//     })
//   }
//   else if(isDelete){
//     await Event.deleteOne({_id: eventId}).exec();
//     return res.status(400).json({
//       body: "Deleted"
//     })
//   }else{

//   }
// }

exports.getEvents = async (req, res) => {
  let event = await Event.find({}).exec();
  return res.send(event);
};

exports.getEventByID = async (req, res) => {
  let { eventId } = req.body;
  let eventById = await Event.findById(eventId);
  return res.send(eventById);
};

exports.getEventByUser = async (req, res) => {
  const { email } = req.user;
  const { _id } = await User.findOne({ email }).exec();
  const events = await Event.find({ creator: _id });
  return res.status(200).json({
    events,
  });
};
