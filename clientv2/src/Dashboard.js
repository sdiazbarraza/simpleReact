import React from 'react';
import { Link } from 'react-router-dom';
import MessageList from './MessageList';

const Dashboard = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link to="/message/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
      <MessageList />
    </div>
  );
};

export default Dashboard;
