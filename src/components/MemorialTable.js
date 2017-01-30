import React from 'react';
import {
  sortOrders,
  formatTypes,
  formatName,
  fetchMemorialData
} from '../helpers';
import { Table } from 'react-bootstrap';

export default class MemorialTable extends React.Component {
  componentDidMount() {
    fetchMemorialData(this.props.updateMemorials);
  }

  render() {
    let formatType = this.props.sortOrder == sortOrders.LAST_NAME
      ? formatTypes.LAST_NAME_FIRST
      : formatTypes.STANDARD;

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
