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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwidXNlcm5hbWUiLCJlIiwic2V0VXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRoZW4iLCJyZXNwb25zZSIsInNldExvZ2dlZEluIiwic2V0Q2hhdHJvb21zIiwiZGF0YSIsImxlbmd0aCIsInNldFVzaW5nQ2hhdHJvb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVPLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUMzQixTQUNFLGdDQUFDLHNCQUFELFFBQ0UsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxVQURSO0FBRUUsSUFBQSxJQUFJLEVBQUMsSUFGUDtBQUdFLElBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDLFFBSGY7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGFBQUlGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTNCLENBQUo7QUFBQTtBQUpiLElBREYsRUFPRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFDUCw0QkFBYUwsS0FBSyxDQUFDQyxRQUFuQixFQUE2QkssSUFBN0IsQ0FBa0MsVUFBQUMsUUFBUSxFQUFJO0FBQzVDUCxRQUFBQSxLQUFLLENBQUNRLFdBQU4sQ0FBa0IsSUFBbEI7QUFDQVIsUUFBQUEsS0FBSyxDQUFDUyxZQUFOLENBQW1CRixRQUFRLENBQUNHLElBQTVCOztBQUNBLFlBQUlILFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCWCxVQUFBQSxLQUFLLENBQUNZLGdCQUFOLENBQXVCTCxRQUFRLENBQUNHLElBQVQsQ0FBYyxDQUFkLENBQXZCO0FBQ0Q7QUFDRixPQU5ELENBRE87QUFBQSxLQURYO0FBVUUsSUFBQSxRQUFRLEVBQUM7QUFWWCxjQVBGLENBREY7QUF3QkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNREJDb250YWluZXIsIE1EQklucHV0LCBNREJCdG4gfSBmcm9tIFwibWRicmVhY3RcIjtcbmltcG9ydCB7IHJlcXVlc3RMb2dpbiB9IGZyb20gXCIuL3JlcXVlc3RzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxNREJDb250YWluZXI+XG4gICAgICA8TURCSW5wdXRcbiAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIHZhbHVlPXtwcm9wcy51c2VybmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gcHJvcHMuc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxNREJCdG5cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICByZXF1ZXN0TG9naW4ocHJvcHMudXNlcm5hbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcHJvcHMuc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgICAgICBwcm9wcy5zZXRDaGF0cm9vbXMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHByb3BzLnNldFVzaW5nQ2hhdHJvb20ocmVzcG9uc2UuZGF0YVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBncmFkaWVudD1cImFxdWFcIlxuICAgICAgPlxuICAgICAgICBMb2cgaW5cbiAgICAgIDwvTURCQnRuPlxuICAgIDwvTURCQ29udGFpbmVyPlxuICApO1xufVxuIl19