import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "74vh",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img
          width="128"
          height="128"
          src={require("../../static/page-not-found.png")}
          alt="404"
        ></img>{" "}
        <p>PAGE NOT FOUND</p>
      </h1>
    </div>
  );
};

export default NotFound;
