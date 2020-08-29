import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#E5E5E5" }}
        sticky="bottom"
        expand="lg"
      >
        <Navbar.Text className="mx-auto">
          AGB • Datenschutz • Impressum
        </Navbar.Text>
      </Navbar>
    </div>
  );
};

export default Footer;
