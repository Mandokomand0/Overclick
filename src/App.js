import React from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";
// import jQuery from "jquery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./components/Game";

const App = () =>
  <Router>
    <div>
        <Route exact path="/" component={Game} />
    </div>
  </Router>;

export default App;
