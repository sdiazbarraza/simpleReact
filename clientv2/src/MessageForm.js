// BlogForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import messageField from './messageField';
import * as actions from './actions';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class MessageForm extends Component {
  constructor(props) {
    super(props);
    
  }
  state = { isShow: false};



  handleChange(event) {
   // console.log("change "+event.target.value);
    //this.setState({value: event.target.value});
  }
  componentDidMount() {
    // Con este prop controlamos si vamos a usar el componente para crear o para actualizar.
    if(this.props.type == 'update') {
        const elements = document.querySelectorAll('.inputTex')
        elements[0].value= this.props.message.message;
    }
}
  
renderFields() {
    if(this.state.isShow){
        console.log("wena");
        return ;
    }
    const { formValues } = this.props 
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={messageField}
          type="text"
          label={label}
          name={name}/>
      );
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {formValues,submitMessage,updateMessage} = this.props;
    if(this.props.type=="update"){
      formValues.messageForm.values._id=this.props.message._id;
      updateMessage(formValues.messageForm.values);
    }else{
      submitMessage(formValues.messageForm.values);
    }
    
    
  }
  handleSubmit(message){
    console.log("handle_message"+message);
  }
  
  render() {
    
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          {this.renderFields()}
          <button className="btn btn-primary">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}
function mapStateToProps(state) {
  
  return { formValues: state.form }
  //return { formValues: state.form.messageForm.values };
}
MessageForm=reduxForm({
  form: 'messageForm'
})(MessageForm);

export default connect(mapStateToProps, actions)(withRouter(MessageForm));
