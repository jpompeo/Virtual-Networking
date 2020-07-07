import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import EventsList from "./EventsList";
import EventPage from "./EventPage";
import Login from "./Login";
import Header from "./Header";

// styling imports
import "../styles/App.css";
import { Row, Col, Container } from "react-bootstrap";

const App = () => {
  return (
    <Container id="app_view">
      <Header />

      <Switch>
        <Route exact path={"/"} component={EventsList} />
        <Route path={"/events/:eventId/login"} component={Login} />
        <Route path={"/events/:eventId"} component={EventPage} />
      </Switch>
    </Container>
  );
};

export default App;
