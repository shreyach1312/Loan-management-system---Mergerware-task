// server/main.js

import { Meteor } from 'meteor/meteor';
import '../imports/api/loans/loansMethods.jsx'; // Import loan methods
import '../imports/api/users/users.jsx'; // Import users collection

Meteor.startup(() => {
  // Code to run on server startup
  console.log('Server started!');
});
