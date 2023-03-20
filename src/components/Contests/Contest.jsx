import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

import "./contest.css";

const Contest = () => {
  return (
    <div className="welcome-area">
      <div className="contest__modal">
        <div className="contest__modal__filters">
          <div className="filter-1 filter">
            <Dropdown>
              <Dropdown.Toggle className="filter__dropdown" id="dropdown-basic">
                Select Communitiy
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/esports">E-Sports</Dropdown.Item>
                <Dropdown.Item href="#/sports">Sports</Dropdown.Item>
                <Dropdown.Item href="#/coding">Coding</Dropdown.Item>
                <Dropdown.Item href="#/arts">Arts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="filter-2 filter">
          <Dropdown>
              <Dropdown.Toggle className="filter__dropdown" id="dropdown-basic">
                Select Entry Fees
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/20">20</Dropdown.Item>
                <Dropdown.Item href="#/40">40</Dropdown.Item>
                <Dropdown.Item href="#/50">50</Dropdown.Item>
                <Dropdown.Item href="#/80">more than 50</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="filter-3 filter">
          <Dropdown>
              <Dropdown.Toggle className="filter__dropdown" id="dropdown-basic">
                Select People Required
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/1">1</Dropdown.Item>
                <Dropdown.Item href="#/2">2</Dropdown.Item>
                <Dropdown.Item href="#/4">4</Dropdown.Item>
                <Dropdown.Item href="#/6">more than 4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="contest__modal__contests"></div>
      </div>
    </div>
  );
};

export default Contest;
