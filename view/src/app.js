import React from "react";
import { MDBContainer } from "mdbreact";
import { Login } from "./login.js";
import { ChatroomSidebar } from "./sidebar.js";
import { MessagesView, SendMessage } from "./messages.js";

function Main(props) {
  const [messages, setMessages] = React.useState([
    // { username: "lincoln", message: "hi there" },
    // { username: "ben", message: "hi back" }
  ]);

  return (
    <MDBContainer>
      <ChatroomSidebar
        username={props.username}
        chatrooms={props.chatrooms}
        setChatrooms={props.setChatrooms}
      />
      <MessagesView messages={messages} username={props.username} />
      <SendMessage />
    </MDBContainer>
  );
}

export default function App(props) {
  const [username, setUsername] = React.useState("");
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [chatrooms, setChatrooms] = React.useState([]);
  if (isLoggedIn) {
    return (
      <Main
        username={username}
        chatrooms={chatrooms}
        setChatrooms={setChatrooms}
      />
    );
  } else {
    return (
      <Login
        setLoggedIn={setLoggedIn}
        username={username}
        setUsername={setUsername}
        setChatrooms={setChatrooms}
      />
    );
  }
}
