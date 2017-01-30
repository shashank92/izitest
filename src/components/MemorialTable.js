import React from 'react';
import { formatName } from '../helpers';
import { Table } from 'react-bootstrap';

export default class MemorialTable extends React.Component {
  componentDidMount() {
    fetch('https://dev.requiemapp.com/public/memorial/random')
      .then(response => response.json())
      .then(json => json.data.map(memorial => Object.assign(memorial, {
        name: memorial.name || {
          first: '',
          last: '',
          middle: ''
        }
      })))
      .then(data => {
        this.props.updateMemorials(data);
      }).catch(e => {
        console.log('parsing failed', e);
      });
  }

  render() {
    return (
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
    )
  }
}
