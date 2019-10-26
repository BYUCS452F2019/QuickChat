import React from "react";
// import 'mdbreact/dist/css/mdb.css';
import { MDBListGroup, MDBListGroupItem, MDBBtn, MDBInput, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

function Login(props) {
  return (
    <MDBContainer>
      <MDBInput label="Username" size="lg" value={props.username} onChange={e => props.setUsername(e.target.value)}/>
      <MDBBtn onClick={() => props.setLoggedIn(true)} gradient="aqua">Log in</MDBBtn>
    </MDBContainer>
  );
}

function ChatroomModal(props) {
  return (
    <MDBContainer>
      <MDBBtn onClick={props.handleModalChange}>Modal</MDBBtn>

      <MDBModal isOpen={props.modal} toggle={props.handleModalChange}>
        <MDBModalHeader toggle={props.handleModalChange}>Add Chatroom</MDBModalHeader>
        <MDBModalBody>
          <MDBInput label="Room Name" type="text" value={props.chatroomName} onChange={event => props.setChatroomName(event.target.value)}/>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={props.handleModalChange}>Close</MDBBtn>
          <MDBBtn gradient="peach">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )
}

function ChatroomSidebar(props) {
  return (
    <p></p>
  )
}

function MessagesView(props) {
  const messages = [];
  for (const message of props.messages) {
    if (message.username == props.username) {
      messages.push(
        <MDBListGroupItem>
          <b>{message.username}</b>: {message.message}
        </MDBListGroupItem>
      );
    } else {
      messages.push(
        <MDBListGroupItem>
          {message.username}: {message.message}
        </MDBListGroupItem>
      );
    }
  }
  return (
    <MDBContainer>
      <MDBListGroup>
        {messages}
      </MDBListGroup>
    </MDBContainer>
  );
  return (
    <p></p>
  )
}

function SendMessage(props) {
  const [message, setMessage] = React.useState("");
  const [timer, setTimer] = React.useState(null);
  const [timerDone, setTimerDone] = React.useState(false);

  const sendMessage = React.useEffect(() => {
    if (timerDone) {
      console.log(message);
      window.clearTimeout(timer)
      setTimer(null);
      setMessage("");
      setTimerDone(false);
    }
  }, [timerDone, timer, message]);

  const ensureTimer = React.useEffect(() => {
    if (timer == null && message != "") {
      setTimer(window.setTimeout(() => setTimerDone(true), 5000));
    }
  }, [message]);

  return (
    <MDBContainer>
      <MDBInput size="lg" value={message} onChange={e => setMessage(e.target.value)}/>
      <MDBBtn onClick={() => setTimerDone(true)} gradient="aqua">Send Message</MDBBtn>
    </MDBContainer>
  )
}

function Main(props) {
  const [messages, setMessages] = React.useState([
    { username: "lincoln", message: "hi there" },
    { username: "ben", message: "hi back" }
  ]);
  const [modal, setModal] = React.useState(false);
  const [chatroomName, setChatroomName] = React.useState("");
  const handleModalChange = event => setModal(!modal)

  return (
    <MDBContainer>
      <ChatroomModal modal={modal} chatroomName={chatroomName} setChatroomName={setChatroomName} handleModalChange={handleModalChange} />
      <ChatroomSidebar />
      <MessagesView messages={messages} username={props.username} />
      <SendMessage />
    </MDBContainer>
  );
}

export default function App(props) {
  const [username, setUsername] = React.useState("");
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  if (isLoggedIn) {
    return (<Main username={username} />);
  } else {
    return (<Login setLoggedIn={setLoggedIn} username={username} setUsername={setUsername} />);
  }
}
