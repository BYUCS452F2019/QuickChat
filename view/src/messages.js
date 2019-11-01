import React from "react";
import {
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";
import { requestSendChat, requestGetMessages } from "./requests.js";

export function MessagesView(props) {
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

  const [poller, setPoller] = React.useState(null);
  React.useEffect(() => {
    window.clearInterval(poller);
    setPoller(window.setInterval(() => {
      requestGetMessages(props.usingChatroom).then(response => {
        if (response.success) {
          props.setMessages(response.data);
        }
      })
    }, 500));
  }, [props.usingChatroom]);

  return (
    <MDBContainer>
      <MDBListGroup>{messages}</MDBListGroup>
    </MDBContainer>
  );
}

export function SendMessage(props) {
  const [message, setMessage] = React.useState("");
  const [timer, setTimer] = React.useState(null);
  const [timerDone, setTimerDone] = React.useState(false);

  const sendMessage = React.useEffect(() => {
    if (timerDone) {
      console.log(props);
      window.clearTimeout(timer);
      setTimer(null);
      setMessage("");
      setTimerDone(false);
      requestSendChat(props.usingChatroom, props.username, message).then(response => {
        if (response.success) {
          console.log("Chatroom: " + props.usingChatroom)
          console.log("Send Message Successfully!")
        }
      })
    }
  }, [timerDone, timer, message, props.usingChatroom, props.username]);

  const ensureTimer = React.useEffect(() => {
    if (timer == null && message != "") {
      setTimer(window.setTimeout(() => setTimerDone(true), 5000));
    }
  }, [message]);

  return (
    <MDBContainer>
      <MDBInput
        size="lg"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <MDBBtn onClick={() => setTimerDone(true)} gradient="aqua">
        Send Message
      </MDBBtn>
    </MDBContainer>
  );
}
