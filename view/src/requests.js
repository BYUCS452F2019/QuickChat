export function requestAddChatroom(chatroom, username) {
  return fetch(`/addchatroom?chatroom=${chatroom}&username=${username}`)
    .then(response => response.json());
}

export function requestLogin(username) {
  return fetch(`/login?username=${username}`)
    .then(response => response.json());
}

export function requestSendchat(chatroom, username, message) {
  return fetch(`/sendchat?username=${username}&chatroom=${chatroom}&${message}`)
    .then(response => response.json());
}

export function requestGetMessages(chatroom) {
  return fetch(`/getmessages?chatroom=${chatroom}`)
    .then(response => response.json());
}



