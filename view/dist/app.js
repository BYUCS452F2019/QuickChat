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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VybmFtZSIsImNoYXRyb29tcyIsInNldENoYXRyb29tcyIsInNldFVzaW5nQ2hhdHJvb20iLCJ1c2luZ0NoYXRyb29tIiwiQXBwIiwic2V0VXNlcm5hbWUiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUEsd0JBQ2FDLGtCQUFNQyxRQUFOLENBQWUsQ0FDN0M7QUFDQTtBQUY2QyxHQUFmLENBRGI7QUFBQTtBQUFBLE1BQ1pDLFFBRFk7QUFBQSxNQUNGQyxXQURFOztBQU1uQixTQUNFLGdDQUFDLHNCQUFELFFBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSyxRQURsQjtBQUVFLElBQUEsU0FBUyxFQUFFTCxLQUFLLENBQUNNLFNBRm5CO0FBR0UsSUFBQSxZQUFZLEVBQUVOLEtBQUssQ0FBQ08sWUFIdEI7QUFJRSxJQUFBLGdCQUFnQixFQUFFUCxLQUFLLENBQUNRO0FBSjFCLElBREYsRUFPRSxnQ0FBQyxzQkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFTCxRQURaO0FBRUUsSUFBQSxXQUFXLEVBQUVDLFdBRmY7QUFHRSxJQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSyxRQUhsQjtBQUlFLElBQUEsYUFBYSxFQUFFTCxLQUFLLENBQUNTO0FBSnZCLElBUEYsRUFhRSxnQ0FBQyxxQkFBRDtBQUNFLElBQUEsYUFBYSxFQUFFVCxLQUFLLENBQUNTLGFBRHZCO0FBRUUsSUFBQSxRQUFRLEVBQUVULEtBQUssQ0FBQ0s7QUFGbEIsSUFiRixDQURGO0FBb0JEOztBQUVjLFNBQVNLLEdBQVQsQ0FBYVYsS0FBYixFQUFvQjtBQUFBLHlCQUNEQyxrQkFBTUMsUUFBTixDQUFlLEVBQWYsQ0FEQztBQUFBO0FBQUEsTUFDMUJHLFFBRDBCO0FBQUEsTUFDaEJNLFdBRGdCOztBQUFBLHlCQUVDVixrQkFBTUMsUUFBTixDQUFlLEtBQWYsQ0FGRDtBQUFBO0FBQUEsTUFFMUJVLFVBRjBCO0FBQUEsTUFFZEMsV0FGYzs7QUFBQSx5QkFHQ1osa0JBQU1DLFFBQU4sQ0FBZSxFQUFmLENBSEQ7QUFBQTtBQUFBLE1BRzFCSSxTQUgwQjtBQUFBLE1BR2ZDLFlBSGU7O0FBQUEseUJBSVNOLGtCQUFNQyxRQUFOLENBQWUsRUFBZixDQUpUO0FBQUE7QUFBQSxNQUkxQk8sYUFKMEI7QUFBQSxNQUlYRCxnQkFKVzs7QUFNakMsTUFBSUksVUFBSixFQUFnQjtBQUNkLFdBQ0UsZ0NBQUMsSUFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFUCxRQURaO0FBRUUsTUFBQSxTQUFTLEVBQUVDLFNBRmI7QUFHRSxNQUFBLFlBQVksRUFBRUMsWUFIaEI7QUFJRSxNQUFBLGFBQWEsRUFBRUUsYUFKakI7QUFLRSxNQUFBLGdCQUFnQixFQUFFRDtBQUxwQixNQURGO0FBU0QsR0FWRCxNQVVPO0FBQ0wsV0FDRSxnQ0FBQyxZQUFEO0FBQ0UsTUFBQSxXQUFXLEVBQUVLLFdBRGY7QUFFRSxNQUFBLFFBQVEsRUFBRVIsUUFGWjtBQUdFLE1BQUEsV0FBVyxFQUFFTSxXQUhmO0FBSUUsTUFBQSxZQUFZLEVBQUVKLFlBSmhCO0FBS0UsTUFBQSxnQkFBZ0IsRUFBRUM7QUFMcEIsTUFERjtBQVNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1EQkNvbnRhaW5lciB9IGZyb20gXCJtZGJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCIuL2xvZ2luLmpzXCI7XHJcbmltcG9ydCB7IENoYXRyb29tU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIuanNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZXNWaWV3LCBTZW5kTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VzLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzKSB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSBSZWFjdC51c2VTdGF0ZShbXHJcbiAgICAvLyB7IHVzZXJuYW1lOiBcImxpbmNvbG5cIiwgbWVzc2FnZTogXCJoaSB0aGVyZVwiIH0sXHJcbiAgICAvLyB7IHVzZXJuYW1lOiBcImJlblwiLCBtZXNzYWdlOiBcImhpIGJhY2tcIiB9XHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TURCQ29udGFpbmVyPlxyXG4gICAgICA8Q2hhdHJvb21TaWRlYmFyXHJcbiAgICAgICAgdXNlcm5hbWU9e3Byb3BzLnVzZXJuYW1lfVxyXG4gICAgICAgIGNoYXRyb29tcz17cHJvcHMuY2hhdHJvb21zfVxyXG4gICAgICAgIHNldENoYXRyb29tcz17cHJvcHMuc2V0Q2hhdHJvb21zfVxyXG4gICAgICAgIHNldFVzaW5nQ2hhdHJvb209e3Byb3BzLnNldFVzaW5nQ2hhdHJvb219XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNZXNzYWdlc1ZpZXdcclxuICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XHJcbiAgICAgICAgc2V0TWVzc2FnZXM9e3NldE1lc3NhZ2VzfVxyXG4gICAgICAgIHVzZXJuYW1lPXtwcm9wcy51c2VybmFtZX1cclxuICAgICAgICB1c2luZ0NoYXRyb29tPXtwcm9wcy51c2luZ0NoYXRyb29tfVxyXG4gICAgICAvPlxyXG4gICAgICA8U2VuZE1lc3NhZ2VcclxuICAgICAgICB1c2luZ0NoYXRyb29tPXtwcm9wcy51c2luZ0NoYXRyb29tfVxyXG4gICAgICAgIHVzZXJuYW1lPXtwcm9wcy51c2VybmFtZX1cclxuICAgICAgLz5cclxuICAgIDwvTURCQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhdHJvb21zLCBzZXRDaGF0cm9vbXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt1c2luZ0NoYXRyb29tLCBzZXRVc2luZ0NoYXRyb29tXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBpZiAoaXNMb2dnZWRJbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1haW5cclxuICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgY2hhdHJvb21zPXtjaGF0cm9vbXN9XHJcbiAgICAgICAgc2V0Q2hhdHJvb21zPXtzZXRDaGF0cm9vbXN9XHJcbiAgICAgICAgdXNpbmdDaGF0cm9vbT17dXNpbmdDaGF0cm9vbX1cclxuICAgICAgICBzZXRVc2luZ0NoYXRyb29tPXtzZXRVc2luZ0NoYXRyb29tfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExvZ2luXHJcbiAgICAgICAgc2V0TG9nZ2VkSW49e3NldExvZ2dlZElufVxyXG4gICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9XHJcbiAgICAgICAgc2V0Q2hhdHJvb21zPXtzZXRDaGF0cm9vbXN9XHJcbiAgICAgICAgc2V0VXNpbmdDaGF0cm9vbT17c2V0VXNpbmdDaGF0cm9vbX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==