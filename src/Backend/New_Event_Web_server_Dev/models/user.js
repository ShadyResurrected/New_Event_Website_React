const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: 'User',
    },
    picture: {
      type: String,
    },
    user_id: {
      type: String,
    },
    events: [{ type: ObjectId, ref: 'Event' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
