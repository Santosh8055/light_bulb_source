import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
  render() {
    return (
      <span className="user-name pl-3">
        Name Surname
        <span className="rounded-circle p-2 bg-secondary ml-1">
          NS
        </span>
      </span>
    );
  }
}

export default UserInfo;
