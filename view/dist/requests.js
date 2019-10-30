"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAddChatroom = requestAddChatroom;
exports.requestLogin = requestLogin;
exports.requestSendchat = requestSendchat;
exports.requestGetMessages = requestGetMessages;

function requestAddChatroom(chatroom, username) {
  return fetch("/addchatroom?chatroom=".concat(chatroom, "&username=").concat(username)).then(function (response) {
    return response.json();
  });
}

function requestLogin(username) {
  return fetch("/login?username=".concat(username)).then(function (response) {
    return response.json();
  });
}

function requestSendchat(chatroom, username, message) {
  return fetch("/sendchat?username=".concat(username, "&chatroom=").concat(chatroom, "&").concat(message)).then(function (response) {
    return response.json();
  });
}

function requestGetMessages(chatroom) {
  return fetch("/getmessages?chatroom=".concat(chatroom)).then(function (response) {
    return response.json();
  });
}