import React from "react";
import Applicants from "./components/applicants/Applicants";
import NavbarComponent from "./components/layout/Navbar";
import MiddleNavbar from "./components/layout/MiddleNavbar";
import UpperNavbar from "./components/layout/UpperNavbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Provider store={store}>
        <Router>
          <div className="container">
            <UpperNavbar />
          </div>

          <div style={{ backgroundColor: "#FFFFFF" }} className="container">
            <MiddleNavbar />
            <NavbarComponent />
            <Switch>
              <Route exact path="/page" component={Applicants} />
            </Switch>
          </div>
          <div className="container">
            <Footer />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
