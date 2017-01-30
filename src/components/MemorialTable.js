import React from 'react';
import { formatName } from '../helpers';
import { Table } from 'react-bootstrap';

export default class MemorialTable extends React.Component {
  render() {
    return (
      <div className="MemorialTable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.memorials.map((memorial, index) => (
              <tr key={index}>
                <td>
                  { formatName(memorial.name, this.props.sortOrder) }
                </td>
                <td>
                  { new Date(memorial.creationDate).toLocaleString() }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
