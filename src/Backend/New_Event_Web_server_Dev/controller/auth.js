const User = require('../models/user');

exports.createOrUpdateUser = async (req, res) => {
  const { name, email, picture, user_id } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    {
      name: name,
      picture,
      user_id,
    },
    { new: true }
  );

  if (user) {
    return res.status(200).json({
      status: 'success',
      body: {
        status: '0',
        body: 'User already exists, so logged in..',
      },
    });
  } else {
    await new User({
      email,
      name,
      picture,
      user_id,
    }).save();

    return res.status(200).json({
      status: 'success',
      body: {
        status: '1',
        body: 'Created New User.',
      },
    });
  }
};
