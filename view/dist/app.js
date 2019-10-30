"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _mdbreact = require("mdbreact");

var _login = require("./login.js");

var _sidebar = require("./sidebar.js");

var _messages = require("./messages.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Main(props) {
  var _React$useState = _react["default"].useState([// { username: "lincoln", message: "hi there" },
    // { username: "ben", message: "hi back" }
  ]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      messages = _React$useState2[0],
      setMessages = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      usingChatroom = _React$useState4[0],
      setUsingChatroom = _React$useState4[1];

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_sidebar.ChatroomSidebar, {
    username: props.username,
    chatrooms: props.chatrooms,
    setChatrooms: props.setChatrooms,
    setUsingChatroom: setUsingChatroom
  }), _react["default"].createElement(_messages.MessagesView, {
    messages: messages,
    username: props.username,
    usingChatroom: usingChatroom
  }), _react["default"].createElement(_messages.SendMessage, {
    usingChatroom: usingChatroom,
    username: props.username
  }));
}

function App(props) {
  var _React$useState5 = _react["default"].useState(""),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      username = _React$useState6[0],
      setUsername = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isLoggedIn = _React$useState8[0],
      setLoggedIn = _React$useState8[1];

  var _React$useState9 = _react["default"].useState([]),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      chatrooms = _React$useState10[0],
      setChatrooms = _React$useState10[1];

  if (isLoggedIn) {
    return _react["default"].createElement(Main, {
      username: username,
      chatrooms: chatrooms,
      setChatrooms: setChatrooms
    });
  } else {
    return _react["default"].createElement(_login.Login, {
      setLoggedIn: setLoggedIn,
      username: username,
      setUsername: setUsername,
      setChatrooms: setChatrooms
    });
  }
}