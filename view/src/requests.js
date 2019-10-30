export function requestAddChatroom(chatroom, username) {
  return fetch(`/addchatroom?chatroom=${chatroom}&username=${username}`)
    .then(response => response.json());
}

export function requestLogin(username) {
  return fetch(`/login?username=${username}`)
    .then(response => response.json());
}

