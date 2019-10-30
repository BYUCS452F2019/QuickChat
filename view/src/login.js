import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdbreact";
import { requestLogin } from "./requests.js";

export function Login(props) {
  return (
    <MDBContainer>
      <MDBInput
        label="Username"
        size="lg"
        value={props.username}
        onChange={e => props.setUsername(e.target.value)}
      />
      <MDBBtn
        onClick={() =>
          requestLogin(props.username).then(response => {
            props.setLoggedIn(true);
            props.setChatrooms(response.data);
          })
        }
        gradient="aqua"
      >
        Log in
      </MDBBtn>
    </MDBContainer>
  );
}
