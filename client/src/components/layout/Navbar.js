import React from "react";
import {
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUser } from "../../actions/getUsers";

const NavbarComponent = ({ searchUser }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    searchUser(formDataObj.myInput);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
          </Nav>
          <Form onSubmit={onFormSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              name="myInput"
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

NavbarComponent.propTypes = {
  searchUser: PropTypes.func.isRequired,
};

export default connect(null, { searchUser })(NavbarComponent);
