import React from "react";
import {
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBNav,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";
import { requestAddChatroom } from "./requests.js";

export function ChatroomSidebar(props) {
  const [modal, setModal] = React.useState(false);
  const [chatroomName, setChatroomName] = React.useState("");
  const handleModalChange = event => setModal(!modal);
  const chatroomElements = [];

  const addChatroom = event => {
    setModal(!modal);
    requestAddChatroom(chatroomName, props.username).then(response => {
      if (response.success) {
        props.setChatrooms([...props.chatrooms, chatroomName]);
        props.setUsingChatroom(chatroomName);
        console.log(props);
        console.log(chatroomName);
      }
    });
  };

  for (const chatroom of props.chatrooms) {
    chatroomElements.push(
      <MDBBtn
        name={chatroom}
        gradient="purple"
        onClick={e => props.setUsingChatroom(chatroom)}
      >
        {chatroom}
      </MDBBtn>
    );
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="6">
          <MDBNav
            style={{ display: "flex", align: "center" }}
            color="peach-gradient"
            className="font-weight-bold py-4 px-2 mb-4"
          >
            <h2 className="white-text">QuickChat</h2>
            {chatroomElements}
            <MDBBtn
              floating
              size="lg"
              gradient="purple"
              onClick={handleModalChange}
            >
              <MDBIcon icon="plus" size="3x" />+
            </MDBBtn>
          </MDBNav>
        </MDBCol>

        <MDBModal isOpen={modal} toggle={handleModalChange}>
          <MDBModalHeader toggle={handleModalChange}>
            Add Chatroom
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="Room Name"
              type="text"
              value={chatroomName}
              onChange={event => setChatroomName(event.target.value)}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={handleModalChange}>
              Close
            </MDBBtn>
            <MDBBtn gradient="peach" onClick={addChatroom}>
              Add
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBRow>
    </MDBContainer>
  );
}
