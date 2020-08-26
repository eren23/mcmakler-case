import React from "react";
import { CardDeck } from "react-bootstrap";
import { useEffect } from "react";
import ApplicantCard from "./ApplicantCard";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/getUsers";
import { v4 as uuidv4 } from "uuid";

const Applicants = ({ getUsers, post: { posts, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const uniq = [...new Set(posts.map((post) => post.status))];
  return (
    <div
      style={{
        minHeight: "70vh",
      }}
    >
      {uniq.map((status) => {
        if (status === "Appointment_Set") {
          const filtered = posts.filter(
            (filt) => filt.status === "Appointment_Set"
          );
          return (
            <div key={uuidv4()}>
              <h1 className="my-3">Appointment Set</h1>
              <CardDeck className="justify-content-between">
                {filtered.map((status) => {
                  return loading === true ? (
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} //3 secs
                    />
                  ) : (
                    <ApplicantCard
                      key={status._id}
                      name={status.name}
                      surname={status.surname}
                      email={status.email}
                      bid={status.bid}
                      status={status.status}
                      date={status.date}
                      phone={status.phone}
                    />
                  );
                })}
              </CardDeck>
            </div>
          );
        } else if (status === "Propety_Viewed") {
          const filtered = posts.filter(
            (filt) => filt.status === "Propety_Viewed"
          );
          return (
            <div key={uuidv4()}>
              <h1 className="my-3">Propety Viewed</h1>
              <CardDeck className="justify-content-between">
                {filtered.map((status) => {
                  return loading === true ? (
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} //3 secs
                    />
                  ) : (
                    <ApplicantCard
                      key={status._id}
                      name={status.name}
                      surname={status.surname}
                      email={status.email}
                      bid={status.bid}
                      status={status.status}
                      date={status.date}
                      phone={status.phone}
                    />
                  );
                })}
              </CardDeck>
            </div>
          );
        } else if (status === "Interested") {
          const filtered = posts.filter((filt) => filt.status === "Interested");
          return (
            <div key={uuidv4()}>
              <h1 className="my-3">Interested</h1>
              <CardDeck
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "100px",
                  flexWrap: "wrap",
                }}
                className="justify-content-between"
              >
                {filtered.map((status) => {
                  return loading === true ? (
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} //3 secs
                    />
                  ) : (
                    <ApplicantCard
                      key={status._id}
                      name={status.name}
                      surname={status.surname}
                      email={status.email}
                      bid={status.bid}
                      status={status.status}
                      date={status.date}
                      phone={status.phone}
                    />
                  );
                })}
              </CardDeck>
            </div>
          );
        } else {
          const filtered = posts.filter(
            (filt) => filt.status === "Offer_Accepted"
          );
          return (
            <div key={uuidv4()}>
              <h1 className="my-3">Offer Accepted</h1>
              <CardDeck className="justify-content-between">
                {filtered.map((status) => {
                  return loading === true ? (
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} //3 secs
                    />
                  ) : (
                    <ApplicantCard
                      key={status._id}
                      name={status.name}
                      surname={status.surname}
                      email={status.email}
                      bid={status.bid}
                      status={status.status}
                      date={status.date}
                      phone={status.phone}
                    />
                  );
                })}
              </CardDeck>
            </div>
          );
        }
      })}
    </div>
  );
};

Applicants.propTypes = {
  getUsers: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.applicants,
});

export default connect(mapStateToProps, { getUsers })(Applicants);
