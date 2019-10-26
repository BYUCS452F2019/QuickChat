import React from "react";
// import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBInput, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

function Login(props) {
  return (
    <div>
      <MDBInput label="Username" size="lg" value={props.username} onChange={e => props.setUsername(e.target.value)}/>
      <MDBBtn onClick={() => props.setLoggedIn(true)} gradient="aqua">Log in</MDBBtn>
    </div>
  );
}

function Main(props) {
  const [modal, setModal] = React.useState(false);

  const handleModalChange = event => {
    setModal(!modal)
  }

  return (
    <MDBContainer>
      <MDBBtn onClick={handleModalChange}>Modal</MDBBtn>

      <MDBModal isOpen={modal} toggle={handleModalChange}>
        <MDBModalHeader toggle={handleModalChange}>Add Chatroom</MDBModalHeader>
        <MDBModalBody>
          <MDBInput label="Room Name" />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={handleModalChange}>Close</MDBBtn>
          <MDBBtn gradient="peach">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
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
