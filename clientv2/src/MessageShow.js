import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { reduxForm } from 'redux-form';
import MessageForm from './MessageForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import memoize from 'memoize-one';
import * as actions from './actions';
class MessageShow extends Component {
    constructor(props) {
        super(props);
        //const store = props.store
        // grab our starting state
        //this.state = store.getState();
        // subscribe to our store
        /*
        store.fetchMessage(this.props.match.params.id).then(function(meess){
            console.log("WEBA");
            this.setState(message.getState())
        });*/
        this.state = {
          isShow: true,
          executeApi: false,
          message: {}
        };
      }
   componentDidMount(){
   this.setState({executeApi:true,message: this.props.fetchMessage(this.props.match.params.id)});
   } 
    componentWillUnmount() {
      if (this._asyncRequest) {
        let id =this.props.match.params.id;
        this.props.fetchMessage(id).cancel();
      }
    }
    renderContent() {
        return (
          <MessageForm
            type="update"
            message={this.props.message.message}
          />
        );
      }
      getDerivedData = memoize(()=>this.state.message
        );
      render() {
        const messageProps = this.getDerivedData(this.props.message);
        return (
          <div>
            {Object.entries(messageProps).length === 0 && messageProps.constructor === Object ?<p>Loading ...</p>:this.renderContent()}
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