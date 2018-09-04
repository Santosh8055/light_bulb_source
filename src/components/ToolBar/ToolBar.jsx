import React, { Component } from 'react';
import { Button } from 'rendition';
import FaHome from 'react-icons/lib/fa/home';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';

class ToolBar extends Component {
  render() {
    return (
      <div className="py-2">
        <Button mr={2} p={2} className="bg-light">
          <FaHome />
        </Button>
        <Button mr={3} p={2} className="bg-light">
          <FaChevronLeft className="mr-2" />
          Back
        </Button>
        <Button p={2} plaintext fontSize={3}>
          <FaLightbulbO />
          Lighting
        </Button>
      </div>
    );
  }
}

export default ToolBar;
