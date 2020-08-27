import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const MiddleNavbar = ({ post: { posts } }) => {
  const filteredApp = posts.filter((filt) => filt.status === "Appointment_Set");
  const filteredView = posts.filter((filt) => filt.status === "Propety_Viewed");
  const appNum = filteredApp.length;
  const viewNum = filteredView.length;
  const totNum = posts.length;
  const others = totNum - (appNum + viewNum);
  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFFFFF" }} expand="lg">
        <Nav className="mr-auto">
          <Navbar.Brand href="/page">
            <img src={require("../../static/back.svg")} alt="Support"></img>{" "}
            Applicants
          </Navbar.Brand>
        </Nav>

        <Navbar.Text className="d-none d-sm-block text-center mx-2">
          {totNum} <br />
          Total{" "}
        </Navbar.Text>
        <Navbar.Text className="d-none d-sm-block text-center mx-2">
          0 <br />
          New{" "}
        </Navbar.Text>
        <Navbar.Text className="d-none d-sm-block  text-center mx-2">
          {viewNum} <br />
          Viewed
        </Navbar.Text>
        <Navbar.Text className="d-none d-sm-block text-center mx-2">
          {appNum} <br />
          Appointment{" "}
        </Navbar.Text>
        <Navbar.Text className="d-none d-sm-block text-center mx-2">
          {others} <br />
          Others
        </Navbar.Text>
      </Navbar>
    </div>
  );
};

MiddleNavbar.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.applicants,
});

export default connect(mapStateToProps)(MiddleNavbar);
