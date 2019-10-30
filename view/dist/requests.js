"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAddChatroom = requestAddChatroom;
exports.requestLogin = requestLogin;

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