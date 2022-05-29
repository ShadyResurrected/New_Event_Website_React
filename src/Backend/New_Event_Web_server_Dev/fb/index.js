var admin = require('firebase-admin');

var serviceAccount = require('../../fb.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://event-organizers-website-default-rtdb.firebaseio.com/',
});

module.exports = admin;
