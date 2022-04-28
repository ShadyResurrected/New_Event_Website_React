const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    pictures: [{ type: String, required: true }],
    description: {
      type: String,
      required: true,
    },
    eventStartTime: {
      type: String,
      required: true,
    },
    eventEndTime: {
      type: String,
      required: true,
    },
    maxParticipant: {
      type: String,
      required: true,
    },
    participants: [{ type: ObjectId, ref: 'User' }],
    currentParticipantCount: {
      type: String,
    },
    creator: {
      type: ObjectId,
      ref: 'User',
    },
    admins: [{ type: ObjectId, ref: 'User' }],
    stats: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
