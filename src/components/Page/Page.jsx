import React, { Component } from 'react';
import { Provider } from 'rendition';

import NavBar from '../NavBar/NavBar';
import ToolBar from '../ToolBar/ToolBar';
import TableContainer from '../TableContainer/TableContainer';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider>
        <NavBar />
        <ToolBar />
        <TableContainer />
      </Provider>
    );
  }
}

export default Page;
