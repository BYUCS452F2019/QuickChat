"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesView = MessagesView;
exports.SendMessage = SendMessage;

var _react = _interopRequireDefault(require("react"));

var _mdbreact = require("mdbreact");

var _requests = require("./requests.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function MessagesView(props) {
  var messages = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = props.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var message = _step.value;

      if (message.username == props.username) {
        messages.push(_react["default"].createElement(_mdbreact.MDBListGroupItem, null, _react["default"].createElement("b", null, message.username), ": ", message.message));
      } else {
        messages.push(_react["default"].createElement(_mdbreact.MDBListGroupItem, null, message.username, ": ", message.message));
      }
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

  var getMessage = function getMessage() {
    (0, _requests.requestGetMessages)(props.usingChatroom).then(function (response) {
      if (response.data) {
        messages = (_readOnlyError("messages"), [].concat(_toConsumableArray(messages), [response.data]));
        console.log("New Message: " + response.data);
        console.log("Get Message Successfully!");
      }
    });
  };

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBListGroup, null, messages), _react["default"].createElement(_mdbreact.MDBBtn, {
    gradient: "purple",
    onClick: getMessage
  }, "UPDATE"));
}

function SendMessage(props) {
  var _React$useState = _react["default"].useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      message = _React$useState2[0],
      setMessage = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      timer = _React$useState4[0],
      setTimer = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      timerDone = _React$useState6[0],
      setTimerDone = _React$useState6[1];

  var sendMessage = _react["default"].useEffect(function () {
    if (timerDone) {
      console.log(message);
      window.clearTimeout(timer);
      setTimer(null);
      setMessage("");
      setTimerDone(false);
      console.log("usingChatroom: " + props.usingChatroom);
      (0, _requests.requestSendchat)(props.usingChatroom, props.username, {
        "message": message
      }).then(function (response) {
        if (response.success) {
          console.log("Chatroom: " + props.usingChatroom);
          console.log("Send Message Successfully!");
        }
      });
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
      setTimerDone(true);
      sendMessage();
    },
    gradient: "aqua"
  }, "Send Message"));
}