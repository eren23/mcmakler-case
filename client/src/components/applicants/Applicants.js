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
  return (
    <div>
      {posts.map((status) => {
        if (status.status === "Appointment_Set") {
          return (
            <CardDeck>
              {loading === true ? (
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
              )}
            </CardDeck>
          );
        } else {
          return <p key={status._id}>Empty Card</p>;
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
