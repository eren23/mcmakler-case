import React from "react";
import { CardDeck } from "react-bootstrap";
import { useEffect } from "react";
import ApplicantCard from "./ApplicantCard";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/getUsers";

const Applicants = ({ getUsers, post: { posts, loading } }) => {
  // const [applicants, setApplicants] = useState([]);
  // const [floading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("/api/users");
  //     setApplicants(response.data);
  //     setLoading(true);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const uniq = [...new Set(posts.map((post) => post.status))];
  console.log(uniq);
  return (
    <div>
      {uniq.map((status) => {
        if (status === "Appointment_Set") {
          const filtered = posts.filter(
            (filt) => filt.status === "Appointment_Set"
          );
          return (
            <div>
              <h1>
                Appointment_Set <br />
              </h1>
              <CardDeck>
                {filtered.map((status) => {
                  {
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
                      />
                    );
                  }
                })}
              </CardDeck>
            </div>
          );
        } else if (status === "Propety_Viewed") {
          const filtered = posts.filter(
            (filt) => filt.status === "Propety_Viewed"
          );
          return (
            <div>
              <h1>Propety_Viewed</h1>
              <CardDeck>
                {filtered.map((status) => {
                  {
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
                      />
                    );
                  }
                })}
              </CardDeck>
            </div>
          );
        } else if (status === "Interested") {
          const filtered = posts.filter((filt) => filt.status === "Interested");
          return (
            <div>
              <h1>Interested</h1>
              <CardDeck>
                {filtered.map((status) => {
                  {
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
                      />
                    );
                  }
                })}
              </CardDeck>
            </div>
          );
        } else {
          const filtered = posts.filter(
            (filt) => filt.status === "Offer_Accepted"
          );
          return (
            <div>
              <h1>Offer_Accepted</h1>
              <CardDeck>
                {filtered.map((status) => {
                  {
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
                      />
                    );
                  }
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
