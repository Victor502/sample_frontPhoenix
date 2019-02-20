import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blogs from "./Blogs";
import Form from "./Form";
import Home from "./Home";
import UpdateForm from "./UpdateForm";
import { SocketContextProvider } from "./SocketContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <SocketContextProvider>
            <Route exact path="/" component={Blogs} />
            <Route path="/create" component={Form} />
            <Route path="/update" component={UpdateForm} />
            <Route path="/home" component={Home} />
          </SocketContextProvider>
        </Router>
      </div>
    );
  }
}

export default App;
