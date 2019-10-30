import React from "react";
import {
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

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
      console.log(message);
      window.clearTimeout(timer);
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
