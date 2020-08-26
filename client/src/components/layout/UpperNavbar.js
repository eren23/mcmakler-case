import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const UpperNavbar = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#E5E5E5" }} expand="lg">
        <Nav className="mr-auto">
          <Navbar.Brand>
            {" "}
            <img
              src={require("../../static/ic-menu_link.svg")}
              alt="Menu"
            ></img>{" "}
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <strong>McMakler</strong>
          </Navbar.Brand>
        </Nav>
        <Navbar.Text className="d-none d-sm-block text-center mx-2">
          <img
            src={require("../../static/ic-contact_support.svg")}
            alt="Support"
          ></img>{" "}
          Contact Support
        </Navbar.Text>
        <Navbar.Text className="text-center mx-2">
          <img src={require("../../static/active.svg")} alt="Message"></img>
        </Navbar.Text>
        <Navbar.Text className="d-none d-sm-block text-center mx-2">
          <img src={require("../../static/ic-user.svg")} alt="Profile"></img>
        </Navbar.Text>
        <Navbar.Text className="d-none d-sm-block text-center mx-2">
          <img
            src={require("../../static/ic-power_settings_new.svg")}
            alt="Logout"
          ></img>
        </Navbar.Text>
      </Navbar>
    </div>
  );
};

export default UpperNavbar;
