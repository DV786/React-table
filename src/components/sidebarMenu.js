import React from "react";
import Col from "react-bootstrap/Col";
import "./common.css";

const SidebarMenu = () => {
  return (
    <Col sm={2} className="sidenav">
      <div>
        <h6 className="py-4 text-light menu-heading">MENU</h6>
      </div>
      <ul id="scroll-container" className="sidenav-menu">
        <li className="item">
          <a className="nav-link d-flex justify-content-between">
            <div>
              <i className="bi bi-speedometer2 text-light"></i>
              <span className="text-light menu">Order</span>
            </div>
            <div className="right-arrow">
              <i className="bi bi-caret-right text-light"></i>
            </div>
          </a>
        </li>
      </ul>
    </Col>
  );
};

export default SidebarMenu;
