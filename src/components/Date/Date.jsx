import React, { Component } from 'react';

class ShowDate extends Component {
  getDate() {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    const date = new Date().toLocaleDateString('en-EN', options);
    return date;
  }

  render() {
    return (
      <span>
        {this.getDate()}
      </span>
    );
  }
}

export default ShowDate;
