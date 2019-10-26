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
  return _react["default"].createElement(_mdbreact.MDBBtn, {
    onClick: function onClick() {
      return props.setLoggedIn(true);
    },
    gradient: "aqua"
  }, "Log in");
}

function Main(props) {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modal = _React$useState2[0],
      setModal = _React$useState2[1];

  var handleModalChange = function handleModalChange(event) {
    setModal(!modal);
  };

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBBtn, {
    onClick: handleModalChange
  }, "Modal"), _react["default"].createElement(_mdbreact.MDBModal, {
    isOpen: modal,
    toggle: handleModalChange
  }, _react["default"].createElement(_mdbreact.MDBModalHeader, {
    toggle: handleModalChange
  }, "Add Chatroom"), _react["default"].createElement(_mdbreact.MDBModalBody, null, _react["default"].createElement(_mdbreact.MDBInput, {
    label: "Room Name"
  })), _react["default"].createElement(_mdbreact.MDBModalFooter, null, _react["default"].createElement(_mdbreact.MDBBtn, {
    color: "secondary",
    onClick: handleModalChange
  }, "Close"), _react["default"].createElement(_mdbreact.MDBBtn, {
    gradient: "peach"
  }, "Save changes"))));
}

function App(props) {
  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLoggedIn = _React$useState4[0],
      setLoggedIn = _React$useState4[1];

  if (isLoggedIn) {
    return _react["default"].createElement(Main, null);
  } else {
    return _react["default"].createElement(Login, {
      setLoggedIn: setLoggedIn
    });
  }
}