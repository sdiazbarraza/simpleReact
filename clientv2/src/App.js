import React, { Component } from 'react';
import axios from "axios";
import Dashboard from './Dashboard';
import MessageNew from './MessageNew';
import MessageShow from './MessageShow';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
class App extends Component {
 
  render() {
    return(<div>
    <BrowserRouter>
       <div className="sans-serif">
       <Switch>
       <Route path="/message/new" component={MessageNew} />
       <Route exact path="/message/:id" component={MessageShow} />
       <Route path="/" component={Dashboard} />
       </Switch>
     </div>
    </BrowserRouter>
  </div>
  ) 
    
  }
}


export default connect(null, actions)(App);