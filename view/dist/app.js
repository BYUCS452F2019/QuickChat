"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _mdbreact = require("mdbreact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Login(props) {
  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBInput, {
    label: "Username",
    size: "lg",
    value: props.username,
    onChange: function onChange(e) {
      return props.setUsername(e.target.value);
    }
  }), _react["default"].createElement(_mdbreact.MDBBtn, {
    onClick: function onClick() {
      return props.setLoggedIn(true);
    },
    gradient: "aqua"
  }, "Log in"));
}

function ChatroomModal(props) {
  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBBtn, {
    onClick: props.handleModalChange
  }, "Modal"), _react["default"].createElement(_mdbreact.MDBModal, {
    isOpen: props.modal,
    toggle: props.handleModalChange
  }, _react["default"].createElement(_mdbreact.MDBModalHeader, {
    toggle: props.handleModalChange
  }, "Add Chatroom"), _react["default"].createElement(_mdbreact.MDBModalBody, null, _react["default"].createElement(_mdbreact.MDBInput, {
    label: "Room Name",
    type: "text",
    value: props.chatroomName,
    onChange: function onChange(event) {
      return props.setChatroomName(event.target.value);
    }
  })), _react["default"].createElement(_mdbreact.MDBModalFooter, null, _react["default"].createElement(_mdbreact.MDBBtn, {
    color: "secondary",
    onClick: props.handleModalChange
  }, "Close"), _react["default"].createElement(_mdbreact.MDBBtn, {
    gradient: "peach"
  }, "Save changes"))));
}

function ChatroomSidebar(props) {
  return _react["default"].createElement("p", null);
}

function MessagesView(props) {
  return _react["default"].createElement("p", null);
}

function SendMessage(props) {
  return _react["default"].createElement("p", null);
}

function Main(props) {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modal = _React$useState2[0],
      setModal = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      chatroomName = _React$useState4[0],
      setChatroomName = _React$useState4[1];

  var handleModalChange = function handleModalChange(event) {
    return setModal(!modal);
  };

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(ChatroomModal, {
    modal: modal,
    chatroomName: chatroomName,
    setChatroomName: setChatroomName,
    handleModalChange: handleModalChange
  }), _react["default"].createElement(ChatroomSidebar, null), _react["default"].createElement(MessagesView, null), _react["default"].createElement(SendMessage, null));
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

  if (isLoggedIn) {
    return _react["default"].createElement(Main, null);
  } else {
    return _react["default"].createElement(Login, {
      setLoggedIn: setLoggedIn,
      username: username,
      setUsername: setUsername
    });
  }
}