import React from 'react';
import { formatTypes, formatName, fetchMemorialData } from '../helpers';
import { Table } from 'react-bootstrap';

export default class MemorialTable extends React.Component {
  componentDidMount() {
    fetchMemorialData(this.props.updateMemorials);
  }

  render() {
    return (
      <Table hover>
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
                { formatName(memorial.name, formatTypes.STANDARD) }
              </td>
              <td>
                { new Date(memorial.creationDate).toLocaleString() }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}
