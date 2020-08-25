import React from "react";
import { Card } from "react-bootstrap";

const ApplicantCard = (props) => {
  const { name, surname, email, status, bid } = props;
  return (
    <div>
      <Card>
        <Card.Img variant="top" alt="Alternative Text" />
        <Card.Body>
          <Card.Title>
            {name} {surname}
          </Card.Title>
          <Card.Text>
            {email} <br />
            {bid}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{status}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ApplicantCard;
