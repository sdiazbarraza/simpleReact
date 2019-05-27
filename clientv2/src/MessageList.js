import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableRow from './TableRow';
export default  class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      loading:true
    };
    
  }
  
  componentDidMount() {
    this.getDataFromDb();
  }
  componentDidUpdate() {
   
}

  getDataFromDb = () => {
    console.log(" calls");  
      axios.get("http://localhost:3001/api/getData")
      .then(response => {
        this.setState((state, props) => {
          return {loading: false,datas:response.data};
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  };
  tabRow(){
    
    if(!this.state.loading){
      var rows = this.state.datas.data.map(function(data){
        return <TableRow key={data._id} id={data.id} message={data.message}/>
      });
      return rows;      
    }
  }

  render() {
  
    return (
      <div>
      <h3 align="center">Message List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Message</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          { this.tabRow() }
        </tbody>
      </table>
    </div>
    );
  }
}
