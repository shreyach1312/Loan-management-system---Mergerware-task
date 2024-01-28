// api/loans/loansMethods.jsx

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Loans } from './loans.jsx';

Meteor.methods({
  'loans.request'(loanDetails) {
    // Check if user is logged in
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized', 'You are not authorized to request a loan.');
    }

    // Check if loan amount is valid
    check(loanDetails.amount, Number);

    // Additional validation logic can be added here

    // Insert loan request into the collection
    Loans.insert({
      amount: loanDetails.amount,
      borrowerId: Meteor.userId(),
      createdAt: new Date(),
    });
  },
});
