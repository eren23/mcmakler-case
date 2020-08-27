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

  const filteredApp = posts.filter((filt) => filt.status === "Appointment_Set");
  const filteredView = posts.filter((filt) => filt.status === "Propety_Viewed");
  const filteredInterest = posts.filter((filt) => filt.status === "Interested");
  const filteredOffer = posts.filter(
    (filt) => filt.status === "Offer_Accepted"
  );

  const appNum = filteredApp.length;
  const viewNum = filteredView.length;
  const interestNum = filteredInterest.length;
  const offerNum = filteredOffer.length;

  return (
    <div
      style={{
        minHeight: "74vh",
      }}
    >
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            /* bring your own prefixes */
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        uniq.map((status) => {
          if (status === "Appointment_Set") {
            const filtered = posts.filter(
              (filt) => filt.status === "Appointment_Set"
            );
            return (
              <div key={uuidv4()}>
                <h4 className="my-3">Appointment Set ({appNum})</h4>
                <CardDeck
                  style={{
                    paddingBottom: "25px",
                  }}
                  className="justify-content-between"
                >
                  {filtered.map((status) => {
                    return (
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
                <h4 className="my-3">Propety Viewed ({viewNum})</h4>
                <CardDeck
                  style={{
                    marginBottom: "25px",
                  }}
                  className="justify-content-between"
                >
                  {filtered.map((status) => {
                    return (
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
            const filtered = posts.filter(
              (filt) => filt.status === "Interested"
            );
            return (
              <div key={uuidv4()}>
                <h4 className="my-3">Interested ({interestNum})</h4>
                <CardDeck
                  style={{
                    marginBottom: "25px",
                  }}
                  className="justify-content-between"
                >
                  {filtered.map((status) => {
                    return (
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
                <h4 className="my-3">Offer Accepted ({offerNum})</h4>
                <CardDeck
                  style={{
                    marginBottom: "25px",
                  }}
                  className="justify-content-between"
                >
                  {filtered.map((status) => {
                    return (
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
        })
      )}
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
