import React from "react";
import { MDBBtn, MDBInput, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,
  MDBNav, MDBRow, MDBCol, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdbreact";

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
      
    </MDBContainer>
  )
}

function ChatroomSidebar(props) {
  const [modal, setModal] = React.useState(false);
  const [chatroomName, setChatroomName] = React.useState("");
  const handleModalChange = event => setModal(!modal)
  const [chatrooms, setChatrooms] = React.useState([
     "Google", "Safari" 
  ]);
  const chatroomElements = [];

  const addChatroom = event => {
    setModal(!modal)
    setChatrooms([
      ...chatrooms, chatroomName
    ])
  }

  for (const chatroom of chatrooms) {
    chatroomElements.push(<MDBBtn gradient="purple">{chatroom}</MDBBtn>)
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="6">
          <MDBNav style={{display:"flex", align: "center"}} color="peach-gradient" className="font-weight-bold py-4 px-2 mb-4">
            <h2 className="white-text" >QuickChat</h2>
            {chatroomElements}
            <MDBBtn floating size="lg" gradient="purple" onClick={handleModalChange}><MDBIcon icon="plus" size="3x"/>+</MDBBtn>
          </MDBNav>
        </MDBCol>

        <MDBModal isOpen={modal} toggle={handleModalChange}>
          <MDBModalHeader toggle={handleModalChange}>Add Chatroom</MDBModalHeader>
          <MDBModalBody>
            <MDBInput label="Room Name" type="text" value={chatroomName} onChange={event => setChatroomName(event.target.value)}/>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={handleModalChange}>Close</MDBBtn>
            <MDBBtn gradient="peach" onClick={addChatroom}>Add</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBRow>
    </MDBContainer>
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

  return (
    <MDBContainer>
      <ChatroomSidebar/>
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
