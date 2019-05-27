import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { reduxForm } from 'redux-form';
import MessageForm from './MessageForm';
 class MessageNew extends Component {
  state = { showFormReview: false };
  
  renderContent() {
    return (
      <MessageForm
        onMessageSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'messageForm'
})(MessageNew);
