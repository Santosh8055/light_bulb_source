import React, { Component } from 'react';

import ShowDate from '../Date/Date';
import ShowTime from '../Time/Time';
import UserInfo from '../UserInfo/UserInfo';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-light initialism text-nowrap">
        <div className="col text-left d-none d-md-block">
          <ShowDate />
        </div>
        <div className="col text-center">
          <ShowTime />
        </div>
        <div className="col text-right">
          <UserInfo />
        </div>

      </nav>
    );
  }
}

export default NavBar;
