"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = Login;

var _react = _interopRequireDefault(require("react"));

var _mdbreact = require("mdbreact");

var _requests = require("./requests.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      return (0, _requests.requestLogin)(props.username).then(function (response) {
        props.setLoggedIn(true);
        props.setChatrooms(response.data);
      });
    },
    gradient: "aqua"
  }, "Log in"));
}