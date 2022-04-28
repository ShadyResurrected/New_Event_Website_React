const admin = require('../fb');

const User = require('../models/user');

exports.authCheck = async (req, res, next) => {
  try {
    console.log(req.headers.authtoken);
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    req.user = firebaseUser;
  } catch (err) {
    // console.log(err);
    return res.status(401).json({
      status: 'error',
      err: 'Invalid or Expired Token',
    });
  }
  next();
};
