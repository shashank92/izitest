import React, { Component } from 'react';
import { formatted, fetchMemorialData } from './helpers';
import { Table, ButtonGroup, Button } from 'react-bootstrap';

export class SortButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOrder: 'CREATION_DATE'
    };

    this.sortByFirstName = this.sortByFirstName.bind(this);
    this.sortByLastName = this.sortByLastName.bind(this);
    this.sortByCreationDate = this.sortByCreationDate.bind(this);
  }

  sortByFirstName() {
    this.props.sortByFirstName();
    this.setState({
      sortOrder: 'FIRST_NAME'
    });
  }

  sortByLastName() {
    this.props.sortByLastName();
    this.setState({
      sortOrder: 'LAST_NAME'
    });
  }

  sortByCreationDate() {
    this.props.sortByCreationDate();
    this.setState({
      sortOrder: 'CREATION_DATE'
    });
  }
  render() {
    return (
      <div style={{
        paddingBottom: '20px'
      }}>
        Sort by&nbsp;
        <ButtonGroup>
          <Button
            onClick={this.sortByFirstName}
            active={this.state.sortOrder === 'FIRST_NAME'}>
            First Name
          </Button>
          <Button
            onClick={this.sortByLastName}
            active={this.state.sortOrder === 'LAST_NAME'}>
            Last Name
          </Button>
          <Button
            onClick={this.sortByCreationDate}
            active={this.state.sortOrder === 'CREATION_DATE'}>
            Creation Date
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export class MemorialTable extends Component {
  componentDidMount() {
    fetchMemorialData(this.props.updateMemorials);
  }

  render() {
    return (
      <Table>
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
                { formatted(memorial.name, 'STANDARD') }
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

export class RefreshButton extends React.Component {
  constructor(props) {
    super(props);
    this.refreshMemorialData = this.refreshMemorialData.bind(this);
  }

  refreshMemorialData() {
    fetchMemorialData(this.props.updateMemorials);
  }

  render() {
    return (
      <div style={{
        paddingTop: '5px'
      }}>
        <Button onClick={this.refreshMemorialData}>Refresh memorial data</Button>
      </div>
    )
  }
}
