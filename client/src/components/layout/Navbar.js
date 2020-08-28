import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  InputGroup,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUser } from "../../actions/getUsers";
import { Redirect } from "react-router-dom";

const NavbarComponent = ({ searchUser }) => {
  const [query, setQuery] = useState("");
  const [fireRedirect, setFireRedirect] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    searchUser(formDataObj.myInput);

    setQuery(formDataObj.myInput);
    setFireRedirect(true);
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFFFFF" }} expand="lg">
        <Nav className="mr-auto">
          <Form inline onSubmit={onFormSubmit}>
            <InputGroup>
              <img src={require("../../static/search.svg")} alt="Support"></img>{" "}
              <FormControl
                type="text"
                placeholder="Search"
                name="myInput"
                className="mr-sm-1"
              />
            </InputGroup>

            <NavDropdown
              style={{
                border: "1px solid #E6E6E6",
                borderRadius: "3px",
                marginRight: "5px",
                marginTop: "2px",
              }}
              title="Bids"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>From Lower</NavDropdown.Item>
              <NavDropdown.Item>From Higher</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              style={{
                border: "1px solid #E6E6E6",
                borderRadius: "3px",
                marginRight: "5px",
                marginTop: "2px",
              }}
              title="Status"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Appointment Set</NavDropdown.Item>
              <NavDropdown.Item>Property Viewed</NavDropdown.Item>
              <NavDropdown.Item>Interested</NavDropdown.Item>
              <NavDropdown.Item>Offer Accepted</NavDropdown.Item>
            </NavDropdown>
          </Form>
          {fireRedirect && <Redirect to={"/?search=" + query} />}
        </Nav>
      </Navbar>
    </div>
  );
};

NavbarComponent.propTypes = {
  searchUser: PropTypes.func.isRequired,
};

export default connect(null, { searchUser })(NavbarComponent);
