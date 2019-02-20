import React from "react";
import { Link } from "react-router-dom";
import { SocketContextConsumer } from "./SocketContext";

class Home extends React.Component {
  state = {
    chatInput: "",
    message: ""
  };

  handleInput(event) {
    this.setState({ chatInput: event.target.value });
  }
  handleMessage(event) {
    this.setState({ message: event.target.value });
  }
  render() {
    return (
      <div>
        <div
          className="is-primary is-large"
          style={{
            position: "absolute",
            top: "180px",
            right: "10px",
            padding: "10px 15px",
            background: "#00D1B2",
            color: "#FFFFFF"
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            Back
          </Link>
        </div>
        <SocketContextConsumer>
          {context => {
            this.handleSubmit = () => {
              context.handleChannel(this.state.chatInput, this.state.message);
              this.setState({ message: "", chatInput: "" });
            };
            return (
              <div>
                <ul id="msg-list" className="row">
                  <li>Hey You</li>
                  {context.state.payLoadInfo.map((p, i) => (
                    <li key={i}>
                      {p.name}: {p.message}
                    </li>
                  ))}
                </ul>
                <form onSubmit={this.handleSubmit} className="row">
                  <div className="col-xs-3">
                    <input
                      value={this.state.chatInput}
                      onChange={this.handleInput.bind(this)}
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      autoFocus
                    />
                  </div>
                  <div className="col-xs-9">
                    <input
                      value={this.state.message}
                      onChange={this.handleMessage.bind(this)}
                      type="text"
                      id="msg"
                      className="form-control"
                      placeholder="Your Message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="button is-primary"
                    // onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            );
          }}
        </SocketContextConsumer>
      </div>
    );
  }
}

export default Home;
