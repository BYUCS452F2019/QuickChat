import React from "react";

function Login(props) {
  return (
    <button onClick={() => props.setLoggedIn(true)}>Log in</button>
  );
}

function Main(props) {
  return (
    <p>You are logged in</p>
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
