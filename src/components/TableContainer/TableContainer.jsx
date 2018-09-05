import React, { Component } from 'react';
import { Table, Button } from 'rendition';
import * as $ from 'jquery';
import FaClose from 'react-icons/lib/fa/close';
import FaPencil from 'react-icons/lib/fa/pencil';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import * as BulbService from '../../services/BulbService';
import './TableContainer.css';

class TableContainer extends Component {
  constructor(props) {
    super(props);

    // statically setting columns. 'sortable' attribute is set false as the Table have an issue.
    this.columns = [
      {
        field: 'name',
        label: 'Name',
        // sortable: true,
      },
      {
        field: 'active',
        label: 'State',
        // sortable: true,
        render: (value, row) => (
          <label className="switch" onClick={this.handlePropagation}>
            <input
              type="checkbox"
              checked={value}
              onChange={(event) => {
                this.handleCheck(row, event);
              }}
            />
            <span className="slider round" />
          </label>
        ),
      },
      {
        field: 'brightness',
        label: 'Brightness',
        // sortable: true,
      },
    ];
    this.state = {
      bulbs: [],
      top: 60,
      selectedRow: {},
      bulbName: '',
      popoverOpen: false,
    };
    this.getBulbs();
  }

  componentDidMount() {
    // Intiall loading of the slider.
    this.setSlider();
  }

  setSlider() {
    // external library called roundSlider is used to set the brightness of the bulb.
    $('#slider').roundSlider({
      sliderType: 'min-range',
      handleShape: 'dot',
      width: '10',
      radius: 100,
      value: this.state.selectedRow.brightness,
      mouseScrollAction: false,
      keyboardAction: false,
      circleShape: 'pie',
      startAngle: 313,
      editableTooltip: false,
      handleSize: '+15',
      change: (args) => {
        this.setCurrentBulbBrightness(args.value);
      },
    });
  }

  setCurrentBulbBrightness(value) {
    // callback function of the setState is used.
    this.setState((prevState) => {
      const bulbs = [...prevState.bulbs];
      const index = bulbs.indexOf(prevState.selectedRow);
      const selectedRow = { ...prevState.selectedRow };
      selectedRow.brightness = value;
      selectedRow.active = value > 0;
      bulbs[index] = selectedRow;
      this.updateBulb(selectedRow);
      return { bulbs, selectedRow };
    });
  }

  setSliderValue(value) {
    $('#slider').roundSlider('setValue', value);
  }

  getBulbs() {
    BulbService.getBulbs().then((response) => {
      response.data.map((row) => {
        // brightness is set to zero if the bulb is not active
        if (!row.active) {
          row.brightness = 0;
        }
        return row;
      });
      this.setState({ bulbs: response.data });
      this.setSelectedRoom(response.data[0]);
      // setting the slider value.
      this.setSliderValue(this.state.selectedRow.brightness);
    });
  }

  setSelectedRoom(row) {
    this.setState({ selectedRow: row });
  }

  setNewName() {
    if (this.state.bulbName !== '') {
      this.setState((prevState) => {
        const bulbs = [...prevState.bulbs];
        const index = bulbs.indexOf(prevState.selectedRow);
        const selectedRow = { ...prevState.selectedRow };
        selectedRow.name = prevState.bulbName;
        bulbs[index] = selectedRow;
        // API call for setting the bulid value.
        this.updateBulb(selectedRow);
        return { bulbs, selectedRow };
      });
    }
  }

  updateBulb(bulb) {
    BulbService.updateBulb(bulb);
  }

  // When switch is clicked.
  handleCheck(bulb) {
    this.setState((prevState) => {
      const bulbs = [...prevState.bulbs];
      const index = bulbs.indexOf(bulb);
      let selectedRow = { ...prevState.selectedRow };
      bulbs[index] = { ...bulb };
      if (bulbs[index].active) {
        bulbs[index].active = false;
        bulbs[index].brightness = 0;
      } else {
        bulbs[index].active = true;
        bulbs[index].brightness = 100;
      }
      if (prevState.selectedRow.id === bulbs[index].id) {
        selectedRow = bulbs[index];
        this.setSliderValue(selectedRow.brightness);
        this.updateBulb(selectedRow);
      } else {
        this.updateBulb(bulbs[index]);
      }
      return { bulbs, selectedRow };
    });
  }

  // When a row is selected from the table.
  handleRowClick(row, event) {
    if (row !== this.state.selectedRow) {
      const rowElement = $(event.target).closest(
        'div[data-display="table-row"]',
      );
      let { top } = rowElement.position();
      top += 23;
      this.setState({ top });
      this.setSelectedRoom(row);
      this.setSliderValue(row.brightness);
    }
    $('.table-container .details').addClass('active');
  }

  handlePopupClose() {
    $('.table-container .details').removeClass('active');
  }

  handlePropagation(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  handleNameChange(event) {
    this.setState({ bulbName: event.target.value });
  }

  toggle() {
    this.setState((prevState) => {
      let { popoverOpen } = prevState;
      popoverOpen = !popoverOpen;
      return { popoverOpen };
    });
    this.setState({ bulbName: '' });
  }

  render() {
    return (
      <div className="table-container container-fluid">
        <div className="row hidden-md">
          <div className="col">
            <Table
              columns={this.columns}
              data={this.state.bulbs}
              rowKey="name"
              onRowClick={(row, event) => this.handleRowClick(row, event)}
            />
          </div>
          <div className="col details bg-dark text-light text-center rounded">
            <button
              type="button"
              className="btn close-button bg-dark text-light"
              onClick={this.handlePopupClose}
            >
              <FaClose />
            </button>
            <div className="pointer" style={{ top: this.state.top }} />
            <div className="container h-100 d-flex justify-content-center">
              <div className="my-auto">
                <div className="py-5">
                  {this.state.selectedRow.name}
                  <Button
                    plaintext
                    className="text-light ml-2"
                    id="Popover1"
                    onClick={() => {
                      this.toggle();
                    }}
                  >
                    <FaPencil />
                  </Button>
                  <Popover
                    placement="bottom"
                    isOpen={this.state.popoverOpen}
                    target="Popover1"
                    toggle={() => {
                      this.toggle();
                    }}
                  >
                    <PopoverHeader>Change name</PopoverHeader>
                    <PopoverBody>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ width: '100%' }}
                          value={this.state.bulbName}
                          onChange={event => this.handleNameChange(event)}
                        />
                        <Button
                          className="mt-3"
                          onClick={() => {
                            this.setNewName();
                          }}
                        >
                          Change
                        </Button>
                      </div>
                    </PopoverBody>
                  </Popover>
                </div>
                <div id="slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableContainer;
