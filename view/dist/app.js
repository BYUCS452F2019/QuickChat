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

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_sidebar.ChatroomSidebar, {
    username: props.username,
    chatrooms: props.chatrooms,
    setChatrooms: props.setChatrooms,
    setUsingChatroom: props.setUsingChatroom
  }), _react["default"].createElement(_messages.MessagesView, {
    messages: messages,
    setMessages: setMessages,
    username: props.username,
    usingChatroom: props.usingChatroom
  }), _react["default"].createElement(_messages.SendMessage, {
    usingChatroom: props.usingChatroom,
    username: props.username
  }));
}

function App(props) {
  var _React$useState3 = _react["default"].useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      username = _React$useState4[0],
      setUsername = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isLoggedIn = _React$useState6[0],
      setLoggedIn = _React$useState6[1];

  var _React$useState7 = _react["default"].useState([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      chatrooms = _React$useState8[0],
      setChatrooms = _React$useState8[1];

  var _React$useState9 = _react["default"].useState(""),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      usingChatroom = _React$useState10[0],
      setUsingChatroom = _React$useState10[1];

  if (isLoggedIn) {
    return _react["default"].createElement(Main, {
      username: username,
      chatrooms: chatrooms,
      setChatrooms: setChatrooms,
      usingChatroom: usingChatroom,
      setUsingChatroom: setUsingChatroom
    });
  } else {
    return _react["default"].createElement(_login.Login, {
      setLoggedIn: setLoggedIn,
      username: username,
      setUsername: setUsername,
      setChatrooms: setChatrooms,
      setUsingChatroom: setUsingChatroom
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VybmFtZSIsImNoYXRyb29tcyIsInNldENoYXRyb29tcyIsInNldFVzaW5nQ2hhdHJvb20iLCJ1c2luZ0NoYXRyb29tIiwiQXBwIiwic2V0VXNlcm5hbWUiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUEsd0JBQ2FDLGtCQUFNQyxRQUFOLENBQWUsQ0FDN0M7QUFDQTtBQUY2QyxHQUFmLENBRGI7QUFBQTtBQUFBLE1BQ1pDLFFBRFk7QUFBQSxNQUNGQyxXQURFOztBQU1uQixTQUNFLGdDQUFDLHNCQUFELFFBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSyxRQURsQjtBQUVFLElBQUEsU0FBUyxFQUFFTCxLQUFLLENBQUNNLFNBRm5CO0FBR0UsSUFBQSxZQUFZLEVBQUVOLEtBQUssQ0FBQ08sWUFIdEI7QUFJRSxJQUFBLGdCQUFnQixFQUFFUCxLQUFLLENBQUNRO0FBSjFCLElBREYsRUFPRSxnQ0FBQyxzQkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFTCxRQURaO0FBRUUsSUFBQSxXQUFXLEVBQUVDLFdBRmY7QUFHRSxJQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSyxRQUhsQjtBQUlFLElBQUEsYUFBYSxFQUFFTCxLQUFLLENBQUNTO0FBSnZCLElBUEYsRUFhRSxnQ0FBQyxxQkFBRDtBQUNFLElBQUEsYUFBYSxFQUFFVCxLQUFLLENBQUNTLGFBRHZCO0FBRUUsSUFBQSxRQUFRLEVBQUVULEtBQUssQ0FBQ0s7QUFGbEIsSUFiRixDQURGO0FBb0JEOztBQUVjLFNBQVNLLEdBQVQsQ0FBYVYsS0FBYixFQUFvQjtBQUFBLHlCQUNEQyxrQkFBTUMsUUFBTixDQUFlLEVBQWYsQ0FEQztBQUFBO0FBQUEsTUFDMUJHLFFBRDBCO0FBQUEsTUFDaEJNLFdBRGdCOztBQUFBLHlCQUVDVixrQkFBTUMsUUFBTixDQUFlLEtBQWYsQ0FGRDtBQUFBO0FBQUEsTUFFMUJVLFVBRjBCO0FBQUEsTUFFZEMsV0FGYzs7QUFBQSx5QkFHQ1osa0JBQU1DLFFBQU4sQ0FBZSxFQUFmLENBSEQ7QUFBQTtBQUFBLE1BRzFCSSxTQUgwQjtBQUFBLE1BR2ZDLFlBSGU7O0FBQUEseUJBSVNOLGtCQUFNQyxRQUFOLENBQWUsRUFBZixDQUpUO0FBQUE7QUFBQSxNQUkxQk8sYUFKMEI7QUFBQSxNQUlYRCxnQkFKVzs7QUFNakMsTUFBSUksVUFBSixFQUFnQjtBQUNkLFdBQ0UsZ0NBQUMsSUFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFUCxRQURaO0FBRUUsTUFBQSxTQUFTLEVBQUVDLFNBRmI7QUFHRSxNQUFBLFlBQVksRUFBRUMsWUFIaEI7QUFJRSxNQUFBLGFBQWEsRUFBRUUsYUFKakI7QUFLRSxNQUFBLGdCQUFnQixFQUFFRDtBQUxwQixNQURGO0FBU0QsR0FWRCxNQVVPO0FBQ0wsV0FDRSxnQ0FBQyxZQUFEO0FBQ0UsTUFBQSxXQUFXLEVBQUVLLFdBRGY7QUFFRSxNQUFBLFFBQVEsRUFBRVIsUUFGWjtBQUdFLE1BQUEsV0FBVyxFQUFFTSxXQUhmO0FBSUUsTUFBQSxZQUFZLEVBQUVKLFlBSmhCO0FBS0UsTUFBQSxnQkFBZ0IsRUFBRUM7QUFMcEIsTUFERjtBQVNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNREJDb250YWluZXIgfSBmcm9tIFwibWRicmVhY3RcIjtcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4vbG9naW4uanNcIjtcbmltcG9ydCB7IENoYXRyb29tU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIuanNcIjtcbmltcG9ydCB7IE1lc3NhZ2VzVmlldywgU2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlcy5qc1wiO1xuXG5mdW5jdGlvbiBNYWluKHByb3BzKSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gUmVhY3QudXNlU3RhdGUoW1xuICAgIC8vIHsgdXNlcm5hbWU6IFwibGluY29sblwiLCBtZXNzYWdlOiBcImhpIHRoZXJlXCIgfSxcbiAgICAvLyB7IHVzZXJuYW1lOiBcImJlblwiLCBtZXNzYWdlOiBcImhpIGJhY2tcIiB9XG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE1EQkNvbnRhaW5lcj5cbiAgICAgIDxDaGF0cm9vbVNpZGViYXJcbiAgICAgICAgdXNlcm5hbWU9e3Byb3BzLnVzZXJuYW1lfVxuICAgICAgICBjaGF0cm9vbXM9e3Byb3BzLmNoYXRyb29tc31cbiAgICAgICAgc2V0Q2hhdHJvb21zPXtwcm9wcy5zZXRDaGF0cm9vbXN9XG4gICAgICAgIHNldFVzaW5nQ2hhdHJvb209e3Byb3BzLnNldFVzaW5nQ2hhdHJvb219XG4gICAgICAvPlxuICAgICAgPE1lc3NhZ2VzVmlld1xuICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XG4gICAgICAgIHNldE1lc3NhZ2VzPXtzZXRNZXNzYWdlc31cbiAgICAgICAgdXNlcm5hbWU9e3Byb3BzLnVzZXJuYW1lfVxuICAgICAgICB1c2luZ0NoYXRyb29tPXtwcm9wcy51c2luZ0NoYXRyb29tfVxuICAgICAgLz5cbiAgICAgIDxTZW5kTWVzc2FnZVxuICAgICAgICB1c2luZ0NoYXRyb29tPXtwcm9wcy51c2luZ0NoYXRyb29tfVxuICAgICAgICB1c2VybmFtZT17cHJvcHMudXNlcm5hbWV9XG4gICAgICAvPlxuICAgIDwvTURCQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoYXRyb29tcywgc2V0Q2hhdHJvb21zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzaW5nQ2hhdHJvb20sIHNldFVzaW5nQ2hhdHJvb21dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG5cbiAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1haW5cbiAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICBjaGF0cm9vbXM9e2NoYXRyb29tc31cbiAgICAgICAgc2V0Q2hhdHJvb21zPXtzZXRDaGF0cm9vbXN9XG4gICAgICAgIHVzaW5nQ2hhdHJvb209e3VzaW5nQ2hhdHJvb219XG4gICAgICAgIHNldFVzaW5nQ2hhdHJvb209e3NldFVzaW5nQ2hhdHJvb219XG4gICAgICAvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2dpblxuICAgICAgICBzZXRMb2dnZWRJbj17c2V0TG9nZ2VkSW59XG4gICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cbiAgICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfVxuICAgICAgICBzZXRDaGF0cm9vbXM9e3NldENoYXRyb29tc31cbiAgICAgICAgc2V0VXNpbmdDaGF0cm9vbT17c2V0VXNpbmdDaGF0cm9vbX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19