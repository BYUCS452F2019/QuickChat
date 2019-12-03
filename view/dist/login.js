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

        if (response.data.length > 0) {
          props.setUsingChatroom(response.data[0]);
        }
      });
    },
    gradient: "aqua"
  }, "Log in"));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwidXNlcm5hbWUiLCJlIiwic2V0VXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRoZW4iLCJyZXNwb25zZSIsInNldExvZ2dlZEluIiwic2V0Q2hhdHJvb21zIiwiZGF0YSIsImxlbmd0aCIsInNldFVzaW5nQ2hhdHJvb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVPLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUMzQixTQUNFLGdDQUFDLHNCQUFELFFBQ0UsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxVQURSO0FBRUUsSUFBQSxJQUFJLEVBQUMsSUFGUDtBQUdFLElBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDLFFBSGY7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGFBQUlGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTNCLENBQUo7QUFBQTtBQUpiLElBREYsRUFPRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFDUCw0QkFBYUwsS0FBSyxDQUFDQyxRQUFuQixFQUE2QkssSUFBN0IsQ0FBa0MsVUFBQUMsUUFBUSxFQUFJO0FBQzVDUCxRQUFBQSxLQUFLLENBQUNRLFdBQU4sQ0FBa0IsSUFBbEI7QUFDQVIsUUFBQUEsS0FBSyxDQUFDUyxZQUFOLENBQW1CRixRQUFRLENBQUNHLElBQTVCOztBQUNBLFlBQUlILFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCWCxVQUFBQSxLQUFLLENBQUNZLGdCQUFOLENBQXVCTCxRQUFRLENBQUNHLElBQVQsQ0FBYyxDQUFkLENBQXZCO0FBQ0Q7QUFDRixPQU5ELENBRE87QUFBQSxLQURYO0FBVUUsSUFBQSxRQUFRLEVBQUM7QUFWWCxjQVBGLENBREY7QUF3QkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1EQkNvbnRhaW5lciwgTURCSW5wdXQsIE1EQkJ0biB9IGZyb20gXCJtZGJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0TG9naW4gfSBmcm9tIFwiLi9yZXF1ZXN0cy5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgIDxNREJJbnB1dFxyXG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgdmFsdWU9e3Byb3BzLnVzZXJuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHByb3BzLnNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgPE1EQkJ0blxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICByZXF1ZXN0TG9naW4ocHJvcHMudXNlcm5hbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRMb2dnZWRJbih0cnVlKTtcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q2hhdHJvb21zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuc2V0VXNpbmdDaGF0cm9vbShyZXNwb25zZS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JhZGllbnQ9XCJhcXVhXCJcclxuICAgICAgPlxyXG4gICAgICAgIExvZyBpblxyXG4gICAgICA8L01EQkJ0bj5cclxuICAgIDwvTURCQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl19