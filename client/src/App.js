import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import UrlForm from "./components/UrlForm";
import Webpage from "./components/Webpage";

import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <UrlForm />
        <Webpage />
      </Container>
    </Provider>
  );
};

export default App;
