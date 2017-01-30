import React from 'react';
import { fetchMemorialData, formatName } from '../helpers';
import { Table } from 'react-bootstrap';

export default class MemorialTable extends React.Component {
  componentDidMount() {
    fetchMemorialData(this.props.updateMemorials);
  }

  render() {
    let formatType = this.props.sortOrder === 'LAST_NAME'
      ? 'LAST_NAME_FIRST'
      : 'STANDARD';

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
                { formatName(memorial.name, formatType) }
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
