"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAddChatroom = requestAddChatroom;
exports.requestLogin = requestLogin;
exports.requestSendChat = requestSendChat;
exports.requestGetMessages = requestGetMessages;

function post(url, data) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, options).then(function (response) {
    return response.json();
  });
}

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

function requestSendChat(chatroom, username, message) {
  return post("/sendchat", {
    username: username,
    chatroom: chatroom,
    message: message
  });
}

function requestGetMessages(chatroom) {
  return fetch("/getmessages?chatroom=".concat(chatroom)).then(function (response) {
    return response.json();
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJwb3N0IiwidXJsIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXF1ZXN0QWRkQ2hhdHJvb20iLCJjaGF0cm9vbSIsInVzZXJuYW1lIiwicmVxdWVzdExvZ2luIiwicmVxdWVzdFNlbmRDaGF0IiwibWVzc2FnZSIsInJlcXVlc3RHZXRNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLElBQUFBLE1BQU0sRUFBRSxNQURNO0FBRWRDLElBQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRks7QUFLZEMsSUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZjtBQUxRLEdBQWhCO0FBT0EsU0FBT08sS0FBSyxDQUFDUixHQUFELEVBQU1FLE9BQU4sQ0FBTCxDQUFvQk8sSUFBcEIsQ0FBeUIsVUFBQUMsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FBakMsQ0FBUDtBQUNEOztBQUVNLFNBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQ0MsUUFBdEMsRUFBZ0Q7QUFDckQsU0FBT04sS0FBSyxpQ0FBMEJLLFFBQTFCLHVCQUErQ0MsUUFBL0MsRUFBTCxDQUNKTCxJQURJLENBQ0MsVUFBQUMsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FEVCxDQUFQO0FBRUQ7O0FBRU0sU0FBU0ksWUFBVCxDQUFzQkQsUUFBdEIsRUFBZ0M7QUFDckMsU0FBT04sS0FBSywyQkFBb0JNLFFBQXBCLEVBQUwsQ0FDSkwsSUFESSxDQUNDLFVBQUFDLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEdBRFQsQ0FBUDtBQUVEOztBQUVNLFNBQVNLLGVBQVQsQ0FBeUJILFFBQXpCLEVBQW1DQyxRQUFuQyxFQUE2Q0csT0FBN0MsRUFBc0Q7QUFDM0QsU0FBT2xCLElBQUksY0FBYztBQUFFZSxJQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUQsSUFBQUEsUUFBUSxFQUFSQSxRQUFaO0FBQXNCSSxJQUFBQSxPQUFPLEVBQVBBO0FBQXRCLEdBQWQsQ0FBWDtBQUNEOztBQUVNLFNBQVNDLGtCQUFULENBQTRCTCxRQUE1QixFQUFzQztBQUMzQyxTQUFPTCxLQUFLLGlDQUEwQkssUUFBMUIsRUFBTCxDQUNKSixJQURJLENBQ0MsVUFBQUMsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FEVCxDQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gIH07XG4gIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RBZGRDaGF0cm9vbShjaGF0cm9vbSwgdXNlcm5hbWUpIHtcbiAgcmV0dXJuIGZldGNoKGAvYWRkY2hhdHJvb20/Y2hhdHJvb209JHtjaGF0cm9vbX0mdXNlcm5hbWU9JHt1c2VybmFtZX1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0TG9naW4odXNlcm5hbWUpIHtcbiAgcmV0dXJuIGZldGNoKGAvbG9naW4/dXNlcm5hbWU9JHt1c2VybmFtZX1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0U2VuZENoYXQoY2hhdHJvb20sIHVzZXJuYW1lLCBtZXNzYWdlKSB7XG4gIHJldHVybiBwb3N0KGAvc2VuZGNoYXRgLCB7IHVzZXJuYW1lLCBjaGF0cm9vbSwgbWVzc2FnZSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RHZXRNZXNzYWdlcyhjaGF0cm9vbSkge1xuICByZXR1cm4gZmV0Y2goYC9nZXRtZXNzYWdlcz9jaGF0cm9vbT0ke2NoYXRyb29tfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cblxuXG5cbiJdfQ==