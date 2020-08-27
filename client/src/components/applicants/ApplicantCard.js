import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

const ApplicantCard = (props) => {
  const { name, surname, email, status, bid, date, phone } = props;
  const initialName = name.charAt(0);
  const initialSurname = surname.charAt(0);

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const LightenDarkenColor = (col, amt) => {
    let usePound = false;

    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }

    let num = parseInt(col, 16);
    let r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  };
  const lighterColor = LightenDarkenColor(randomColor, -70);

  let formattedMoney = 0;
  if (bid) {
    const formattedOutput = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    formattedMoney = formattedOutput.format(bid);
  }

  return (
    <div>
      <Card className="mt-1 mb-4">
        <p
          className="position-flex text-center rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            margin: "auto",
            paddingTop: "15px",
            marginBottom: "0px",
            marginTop: "20px",
            backgroundColor: `#${randomColor}`,
            color: `#${lighterColor}`,
          }}
        >
          <strong>
            {initialName}
            {initialSurname}
          </strong>
        </p>
        <Card.Body>
          <Card.Title className="text-center m-1">
            {name} {surname}
          </Card.Title>
          <Card.Text className="text-center m-1">{phone}</Card.Text>
          <Card.Text className="text-center m-1">{email}</Card.Text>
          <Card.Text
            style={{
              backgroundColor: "#9D9D9D",
              color: "#FFFFFF",
              borderRadius: "2px",
            }}
            className="text-center m-1"
          >
            <small>
              <Moment>{date}</Moment>
            </small>
          </Card.Text>
          {bid && (
            <Card.Text className="text-center m-1">
              <span
                style={{
                  backgroundColor: "#FEB902",
                  borderRadius: "2px",
                  color: "#FFFFFF",
                }}
              >
                <strong>{formattedMoney}</strong>
              </span>
            </Card.Text>
          )}
        </Card.Body>
        <Card.Footer className="text-center m-1">
          <small className="text-muted">{status}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ApplicantCard;
