function post(url, data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, options).then(response => response.json());
}

export function requestAddChatroom(chatroom, username) {
  return fetch(`/addchatroom?chatroom=${chatroom}&username=${username}`)
    .then(response => response.json());
}

export function requestLogin(username) {
  return fetch(`/login?username=${username}`)
    .then(response => response.json());
}

export function requestSendChat(chatroom, username, message) {
  return post(`/sendchat`, { username, chatroom, message });
}

export function requestGetMessages(chatroom) {
  return fetch(`/getmessages?chatroom=${chatroom}`)
    .then(response => response.json());
}



