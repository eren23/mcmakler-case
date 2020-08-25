import React from "react";
import Applicants from "./components/applicants/Applicants";
import NavbarComponent from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <div className="container">
        <NavbarComponent />
        <Applicants />
      </div>
    </div>
  );
}

export default App;
