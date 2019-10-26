import React from "react";
// import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBInput, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

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
  return (
    <p></p>
  )
}

function SendMessage(props) {
  return (
    <p></p>
  )
}

function Main(props) {
  const [modal, setModal] = React.useState(false);
  const [chatroomName, setChatroomName] = React.useState("");
  const handleModalChange = event => setModal(!modal)

  return (
    <MDBContainer>
      <ChatroomModal modal={modal} chatroomName={chatroomName} setChatroomName={setChatroomName} handleModalChange={handleModalChange} />
      <ChatroomSidebar />
      <MessagesView />
      <SendMessage />
    </MDBContainer>
  );
}

export default function App(props) {
  const [username, setUsername] = React.useState("");
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  if (isLoggedIn) {
    return (<Main />);
  } else {
    return (<Login setLoggedIn={setLoggedIn} username={username} setUsername={setUsername} />);
  }
}
