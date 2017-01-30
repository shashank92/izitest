import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class SortButtons extends React.Component {
  render() {
    return (
      <div className="SortButtons">
        <span>Sort by</span>
        <ButtonGroup className="SortButtons-group">
          <Button
            onClick={this.props.sortByFirstName}
            active={this.props.sortOrder === 'FIRST_NAME'}>
            First Name
          </Button>
          <Button
            onClick={this.props.sortByLastName}
            active={this.props.sortOrder === 'LAST_NAME'}>
            Last Name
          </Button>
          <Button
            onClick={this.props.sortByCreationDate}
            active={this.props.sortOrder === 'CREATION_DATE'}>
            Creation Date
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}
