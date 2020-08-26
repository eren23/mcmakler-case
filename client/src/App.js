import React from "react";
import Applicants from "./components/applicants/Applicants";
import NavbarComponent from "./components/layout/Navbar";
import MiddleNavbar from "./components/layout/MiddleNavbar";
import UpperNavbar from "./components/layout/UpperNavbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <UpperNavbar />
      </div>

      <div style={{ backgroundColor: "#FFFFFF" }} className="container">
        <Provider store={store}>
          <MiddleNavbar />
          <NavbarComponent />
          <Applicants />
        </Provider>
      </div>
    </div>
  );
}

export default App;
