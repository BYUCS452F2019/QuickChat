"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _mdbreact = require("mdbreact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function ChatroomSidebar(props) {
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

  var _React$useState5 = _react["default"].useState(["Google", "Safari"]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      chatrooms = _React$useState6[0],
      setChatrooms = _React$useState6[1];

  var chatroomElements = [];

  var addChatroom = function addChatroom(event) {
    setModal(!modal);
    setChatrooms([].concat(_toConsumableArray(chatrooms), [chatroomName]));
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = chatrooms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var chatroom = _step.value;
      chatroomElements.push(_react["default"].createElement(_mdbreact.MDBBtn, {
        gradient: "purple"
      }, chatroom));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBRow, null, _react["default"].createElement(_mdbreact.MDBCol, {
    size: "6"
  }, _react["default"].createElement(_mdbreact.MDBNav, {
    style: {
      display: "flex",
      align: "center"
    },
    color: "peach-gradient",
    className: "font-weight-bold py-4 px-2 mb-4"
  }, _react["default"].createElement("h2", {
    className: "white-text"
  }, "QuickChat"), chatroomElements, _react["default"].createElement(_mdbreact.MDBBtn, {
    floating: true,
    size: "lg",
    gradient: "purple",
    onClick: handleModalChange
  }, _react["default"].createElement(_mdbreact.MDBIcon, {
    icon: "plus",
    size: "3x"
  }), "+"))), _react["default"].createElement(_mdbreact.MDBModal, {
    isOpen: modal,
    toggle: handleModalChange
  }, _react["default"].createElement(_mdbreact.MDBModalHeader, {
    toggle: handleModalChange
  }, "Add Chatroom"), _react["default"].createElement(_mdbreact.MDBModalBody, null, _react["default"].createElement(_mdbreact.MDBInput, {
    label: "Room Name",
    type: "text",
    value: chatroomName,
    onChange: function onChange(event) {
      return setChatroomName(event.target.value);
    }
  })), _react["default"].createElement(_mdbreact.MDBModalFooter, null, _react["default"].createElement(_mdbreact.MDBBtn, {
    color: "secondary",
    onClick: handleModalChange
  }, "Close"), _react["default"].createElement(_mdbreact.MDBBtn, {
    gradient: "peach",
    onClick: addChatroom
  }, "Add")))));
}

function MessagesView(props) {
  var messages = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = props.messages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var message = _step2.value;

      if (message.username == props.username) {
        messages.push(_react["default"].createElement(_mdbreact.MDBListGroupItem, null, _react["default"].createElement("b", null, message.username), ": ", message.message));
      } else {
        messages.push(_react["default"].createElement(_mdbreact.MDBListGroupItem, null, message.username, ": ", message.message));
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBListGroup, null, messages));
}

function SendMessage(props) {
  var _React$useState7 = _react["default"].useState(""),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      message = _React$useState8[0],
      setMessage = _React$useState8[1];

  var _React$useState9 = _react["default"].useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      timer = _React$useState10[0],
      setTimer = _React$useState10[1];

  var _React$useState11 = _react["default"].useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      timerDone = _React$useState12[0],
      setTimerDone = _React$useState12[1];

  var sendMessage = _react["default"].useEffect(function () {
    if (timerDone) {
      console.log(message);
      window.clearTimeout(timer);
      setTimer(null);
      setMessage("");
      setTimerDone(false);
    }
  }, [timerDone, timer, message]);

  var ensureTimer = _react["default"].useEffect(function () {
    if (timer == null && message != "") {
      setTimer(window.setTimeout(function () {
        return setTimerDone(true);
      }, 5000));
    }
  }, [message]);

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBInput, {
    size: "lg",
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    }
  }), _react["default"].createElement(_mdbreact.MDBBtn, {
    onClick: function onClick() {
      return setTimerDone(true);
    },
    gradient: "aqua"
  }, "Send Message"));
}

function Main(props) {
  var _React$useState13 = _react["default"].useState([{
    username: "lincoln",
    message: "hi there"
  }, {
    username: "ben",
    message: "hi back"
  }]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      messages = _React$useState14[0],
      setMessages = _React$useState14[1];

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(ChatroomSidebar, null), _react["default"].createElement(MessagesView, {
    messages: messages,
    username: props.username
  }), _react["default"].createElement(SendMessage, null));
}

function App(props) {
  var _React$useState15 = _react["default"].useState(""),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      username = _React$useState16[0],
      setUsername = _React$useState16[1];

  var _React$useState17 = _react["default"].useState(false),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      isLoggedIn = _React$useState18[0],
      setLoggedIn = _React$useState18[1];

  if (isLoggedIn) {
    return _react["default"].createElement(Main, {
      username: username
    });
  } else {
    return _react["default"].createElement(Login, {
      setLoggedIn: setLoggedIn,
      username: username,
      setUsername: setUsername
    });
  }
}