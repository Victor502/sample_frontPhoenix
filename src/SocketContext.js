import React, { Component } from "react";
import { Socket } from "phoenix";

// socket connection. Only ever need one
let socket = new Socket("ws://localhost:4000/socket", {
  params: { token: window.userToken }
});
socket.connect();
// can connect to diff topics (:lobby) and pass down through state
let channel = socket.channel("room:lobby", {});
//info about socket conection can move to diff logging
socket.onOpen(ev => console.log("OPEN", ev));
socket.onError(ev => console.log("ERROR", ev));
socket.onClose(e => console.log("CLOSE", e));

export const SocketContext = React.createContext({});

export class SocketContextProvider extends Component {
  state = {
    payLoadInfo: [],
    connetedChannel: channel,
  };

  componentDidMount() {
    channel.on("shout", payload => {
      // listen to the 'shout' event, Payload is the info coming from server
      this.setState((prevState) => ({payLoadInfo: [...prevState.payLoadInfo, payload]}) )
    });

    channel.join()
      .receive("ok", response => {
        console.log("Joined successfully", response);
      })
      .receive("error", resp => {
        console.log("Unable to join", resp);
      });
  }
  componentWillUnmount() {
    
  }
  
  render() {
    return (
      <SocketContext.Provider value={{
          state: this.state,
          handleChannel: (name, message) =>
          channel.push('shout', {
          name: name,     // get value of "name" of person sending the message
          message: message    // get message text (value) from msg input field.
        })
       }}>
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}

export const SocketContextConsumer = SocketContext.Consumer;
