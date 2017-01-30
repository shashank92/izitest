import React from 'react';
import { fetchMemorialData } from '../helpers';
import { Button } from 'react-bootstrap';

export default class RefreshButton extends React.Component {
  constructor(props) {
    super(props);
    this.refreshMemorialData = this.refreshMemorialData.bind(this);
  }

  refreshMemorialData() {
    fetchMemorialData(this.props.updateMemorials);
  }

  render() {
    return (
      <div className="RefreshButton">
        <Button onClick={this.refreshMemorialData}>Refresh memorial data</Button>
      </div>
    )
  }
}
