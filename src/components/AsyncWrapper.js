import React from 'react';

export default class AsyncWrapper extends React.Component {
  componentDidMount() {
    this.props.fetchMemorials();
  }

  render() {
    return (
      <div>
        {this.props.waitingForMemorials ?
          'Fetching memorial data...' :
          this.props.children
        }
      </div>
    )
  }
}
