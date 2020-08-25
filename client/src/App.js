import React from "react";
import Applicants from "./components/applicants/Applicants";
import NavbarComponent from "./components/layout/Navbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <div className="container">
        <Provider store={store}>
          <NavbarComponent />
          <Applicants />
        </Provider>
      </div>
    </div>
  );
}

export default App;
