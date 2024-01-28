
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import './main.html'; 
const MainLayout = () => {
  const user = Meteor.user();

  const currentDashboard = () => {
    if (user) {
      if (user.profile && user.profile.role === 'admin') {
        return <AdminDashboard />;
      } else if (user.profile && user.profile.role === 'lender') {
        return <LenderDashboard />;
      } else {
        return <BorrowerDashboard />;
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Loan Management App</h1>
      </div>
      <div className="content">
        {currentDashboard()}
      </div>
    </div>
  );
};
const BorrowerDashboard = () => (
  <div>
    <h2>Borrower Dashboard</h2>
    
  </div>
);


const LenderDashboard = () => (
  <div>
    <h2>Lender Dashboard</h2>
    
  </div>
);


const AdminDashboard = () => (
  <div>
    <h2>Admin Dashboard</h2>
  
  </div>
);

Meteor.startup(() => {
  render(<MainLayout />, document.getElementById('app'));
});
