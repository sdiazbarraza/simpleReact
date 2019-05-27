import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { reduxForm } from 'redux-form';
import MessageForm from './MessageForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './actions';
class MessageShow extends Component {
    constructor(props) {
        super(props);
        //const store = props.store
        // grab our starting state
        //this.state = store.getState();
        console.log("WEBA");
        console.log(props);
        // subscribe to our store
        /*
        store.fetchMessage(this.props.match.params.id).then(function(meess){
            console.log("WEBA");
            this.setState(message.getState())
        });*/
      }
    componentDidMount() {

        let id =this.props.match.params.id;
        if(typeof id !="undefined" && id!="" ){
            this.props.fetchMessage(id);
          
          
        }
        
    }
    /*
    componentWillReceiveProps(nextProps){
        console.log("nextProps");    
        console.log(nextProps);
      }*/
      static getDerivedStateFromProps(nextProps, prevState) {
        // do things with nextProps.someProp and prevState.cachedSomeProp
        console.log("nextProps");
        console.log(nextProps);
        /*
        return {
          cachedSomeProp: nextProps.someProp,
       
        };*/
      }  

      renderContent() {
        return (
          <MessageForm
            onMessageSubmit={() => this.setState({ showFormReview: true })}
          />
        );
      }

      render() {
        console.log("render");  
        console.log(this.state);
        return (
          <div>
            {this.renderContent()}
          </div>
        );
      }
}
function mapStateToProps(state, ownProps) {
    return { message: state.message }
    console.log("ownProps");
    console.log(ownProps);
   // return { formValues: state.form }
    //return { formValues: state.form.messageForm.values };
  }
MessageShow=reduxForm({
    form: 'messageForm'
})(MessageShow);
export default connect(mapStateToProps, actions)(withRouter(MessageShow));