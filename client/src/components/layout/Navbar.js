import React from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUser } from "../../actions/getUsers";

const NavbarComponent = ({ searchUser }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    // console.log(formDataObj);
    searchUser(formDataObj.myInput);
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFFFFF" }} expand="lg">
        <Nav className="mr-auto">
          <Form inline onSubmit={onFormSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              name="myInput"
              className="mr-sm-1"
            />
            <NavDropdown title="Bids" id="basic-nav-dropdown">
              <NavDropdown.Item>From Lower</NavDropdown.Item>
              <NavDropdown.Item>From Higher</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Status" id="basic-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
            </NavDropdown>
            {/* <Button type="submit" variant="outline-success">
              Search
            </Button> */}
          </Form>
        </Nav>
      </Navbar>
    </div>
  );
};

NavbarComponent.propTypes = {
  searchUser: PropTypes.func.isRequired,
};

export default connect(null, { searchUser })(NavbarComponent);
