"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatroomSidebar = ChatroomSidebar;

var _react = _interopRequireDefault(require("react"));

var _mdbreact = require("mdbreact");

var _requests = require("./requests.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var chatroomElements = [];

  var addChatroom = function addChatroom(event) {
    setModal(!modal);
    (0, _requests.requestAddChatroom)(chatroomName, props.username).then(function (response) {
      if (response.success) {
        props.setChatrooms([].concat(_toConsumableArray(props.chatrooms), [chatroomName]));
      }
    });
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = props.chatrooms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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