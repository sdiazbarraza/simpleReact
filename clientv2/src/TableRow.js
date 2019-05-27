import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.id}
          </td>
          <td>
            {this.props.message}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;