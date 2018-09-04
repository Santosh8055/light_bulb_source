import React, { Component } from 'react';

class ShowTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getTime(),
    };
    this.adjustTime();
  }

  getTime() {
    const d = new Date();
    const options = { hour: '2-digit', minute: '2-digit' };
    return d.toLocaleTimeString([], options);
  }

  adjustTime() {
    setInterval(() => {
      const time = this.getTime();
      this.setState({ time });
    }, 30000);
  }

  render() {
    return (
      <span className="show-time">
        {this.state.time}
      </span>
    );
  }
}

export default ShowTime;
