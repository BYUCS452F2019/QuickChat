import React from "react";
// import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBInput, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

function Login(props) {
  return (
    <MDBBtn onClick={() => props.setLoggedIn(true)} gradient="aqua">Log in</MDBBtn>
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
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  if (isLoggedIn) {
    return (<Main />);
  } else {
    return (<Login setLoggedIn={setLoggedIn} />);
  }
}
