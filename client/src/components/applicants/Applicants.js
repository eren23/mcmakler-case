import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ApplicantCard from "./ApplicantCard";
import Loader from "react-loader-spinner";

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/users");
      setApplicants(response.data);
      setLoading(true);
    };
    fetchData();
  }, []);
  return (
    <div>
      <CardDeck>
        {loading == false ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (
          applicants.map((app) => {
            return (
              <ApplicantCard
                key={app._id}
                name={app.name}
                surname={app.surname}
                email={app.email}
                bid={app.bid}
                status={app.status}
              />
            );
          })
        )}
      </CardDeck>
    </div>
  );
};

export default Applicants;
