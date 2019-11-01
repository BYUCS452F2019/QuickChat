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

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      poller = _React$useState2[0],
      setPoller = _React$useState2[1];

  _react["default"].useEffect(function () {
    window.clearInterval(poller);
    setPoller(window.setInterval(function () {
      (0, _requests.requestGetMessages)(props.usingChatroom).then(function (response) {
        if (response.success) {
          props.setMessages(response.data);
        }
      });
    }, 500));
  }, [props.usingChatroom]);

  return _react["default"].createElement(_mdbreact.MDBContainer, null, _react["default"].createElement(_mdbreact.MDBListGroup, null, messages));
}

function SendMessage(props) {
  var _React$useState3 = _react["default"].useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      message = _React$useState4[0],
      setMessage = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      timer = _React$useState6[0],
      setTimer = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      timerDone = _React$useState8[0],
      setTimerDone = _React$useState8[1];

  var sendMessage = _react["default"].useEffect(function () {
    if (timerDone) {
      console.log(props);
      window.clearTimeout(timer);
      setTimer(null);
      setMessage("");
      setTimerDone(false);
      (0, _requests.requestSendChat)(props.usingChatroom, props.username, message).then(function (response) {
        if (response.success) {
          console.log("Chatroom: " + props.usingChatroom);
          console.log("Send Message Successfully!");
        }
      });
    }
  }, [timerDone, timer, message, props.usingChatroom, props.username]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXNzYWdlcy5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlc1ZpZXciLCJwcm9wcyIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsInVzZXJuYW1lIiwicHVzaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwb2xsZXIiLCJzZXRQb2xsZXIiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ1c2luZ0NoYXRyb29tIiwidGhlbiIsInJlc3BvbnNlIiwic3VjY2VzcyIsInNldE1lc3NhZ2VzIiwiZGF0YSIsIlNlbmRNZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpbWVyIiwic2V0VGltZXIiLCJ0aW1lckRvbmUiLCJzZXRUaW1lckRvbmUiLCJzZW5kTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJlbnN1cmVUaW1lciIsInNldFRpbWVvdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7OztBQUVPLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ2xDLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQURrQztBQUFBO0FBQUE7O0FBQUE7QUFFbEMseUJBQXNCRCxLQUFLLENBQUNDLFFBQTVCLDhIQUFzQztBQUFBLFVBQTNCQyxPQUEyQjs7QUFDcEMsVUFBSUEsT0FBTyxDQUFDQyxRQUFSLElBQW9CSCxLQUFLLENBQUNHLFFBQTlCLEVBQXdDO0FBQ3RDRixRQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FDRSxnQ0FBQywwQkFBRCxRQUNFLDJDQUFJRixPQUFPLENBQUNDLFFBQVosQ0FERixRQUM4QkQsT0FBTyxDQUFDQSxPQUR0QyxDQURGO0FBS0QsT0FORCxNQU1PO0FBQ0xELFFBQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUNFLGdDQUFDLDBCQUFELFFBQ0dGLE9BQU8sQ0FBQ0MsUUFEWCxRQUN1QkQsT0FBTyxDQUFDQSxPQUQv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QUFDLGtCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsSUFEUDtBQUVFLElBQUEsS0FBSyxFQUFFQSxPQUZUO0FBR0UsSUFBQSxRQUFRLEVBQUUsa0JBQUE2QixDQUFDO0FBQUEsYUFBSVgsVUFBVSxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFIYixJQURGLEVBTUUsZ0NBQUMsZ0JBQUQ7QUFBUSxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1ULFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsS0FBakI7QUFBMkMsSUFBQSxRQUFRLEVBQUM7QUFBcEQsb0JBTkYsQ0FERjtBQVlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTURCQnRuLFxuICBNREJJbnB1dCxcbiAgTURCQ29udGFpbmVyLFxuICBNREJMaXN0R3JvdXAsXG4gIE1EQkxpc3RHcm91cEl0ZW1cbn0gZnJvbSBcIm1kYnJlYWN0XCI7XG5pbXBvcnQgeyByZXF1ZXN0U2VuZENoYXQsIHJlcXVlc3RHZXRNZXNzYWdlcyB9IGZyb20gXCIuL3JlcXVlc3RzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlc1ZpZXcocHJvcHMpIHtcbiAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgZm9yIChjb25zdCBtZXNzYWdlIG9mIHByb3BzLm1lc3NhZ2VzKSB7XG4gICAgaWYgKG1lc3NhZ2UudXNlcm5hbWUgPT0gcHJvcHMudXNlcm5hbWUpIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goXG4gICAgICAgIDxNREJMaXN0R3JvdXBJdGVtPlxuICAgICAgICAgIDxiPnttZXNzYWdlLnVzZXJuYW1lfTwvYj46IHttZXNzYWdlLm1lc3NhZ2V9XG4gICAgICAgIDwvTURCTGlzdEdyb3VwSXRlbT5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goXG4gICAgICAgIDxNREJMaXN0R3JvdXBJdGVtPlxuICAgICAgICAgIHttZXNzYWdlLnVzZXJuYW1lfToge21lc3NhZ2UubWVzc2FnZX1cbiAgICAgICAgPC9NREJMaXN0R3JvdXBJdGVtPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBbcG9sbGVyLCBzZXRQb2xsZXJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwocG9sbGVyKTtcbiAgICBzZXRQb2xsZXIod2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHJlcXVlc3RHZXRNZXNzYWdlcyhwcm9wcy51c2luZ0NoYXRyb29tKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBwcm9wcy5zZXRNZXNzYWdlcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCA1MDApKTtcbiAgfSwgW3Byb3BzLnVzaW5nQ2hhdHJvb21dKTtcblxuICByZXR1cm4gKFxuICAgIDxNREJDb250YWluZXI+XG4gICAgICA8TURCTGlzdEdyb3VwPnttZXNzYWdlc308L01EQkxpc3RHcm91cD5cbiAgICA8L01EQkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbmRNZXNzYWdlKHByb3BzKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdGltZXJEb25lLCBzZXRUaW1lckRvbmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGltZXJEb25lKSB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHNldFRpbWVyKG51bGwpO1xuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICAgIHNldFRpbWVyRG9uZShmYWxzZSk7XG4gICAgICByZXF1ZXN0U2VuZENoYXQocHJvcHMudXNpbmdDaGF0cm9vbSwgcHJvcHMudXNlcm5hbWUsIG1lc3NhZ2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhdHJvb206IFwiICsgcHJvcHMudXNpbmdDaGF0cm9vbSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmQgTWVzc2FnZSBTdWNjZXNzZnVsbHkhXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LCBbdGltZXJEb25lLCB0aW1lciwgbWVzc2FnZSwgcHJvcHMudXNpbmdDaGF0cm9vbSwgcHJvcHMudXNlcm5hbWVdKTtcblxuICBjb25zdCBlbnN1cmVUaW1lciA9IFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRpbWVyID09IG51bGwgJiYgbWVzc2FnZSAhPSBcIlwiKSB7XG4gICAgICBzZXRUaW1lcih3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRUaW1lckRvbmUodHJ1ZSksIDUwMDApKTtcbiAgICB9XG4gIH0sIFttZXNzYWdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TURCQ29udGFpbmVyPlxuICAgICAgPE1EQklucHV0XG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8TURCQnRuIG9uQ2xpY2s9eygpID0+IHNldFRpbWVyRG9uZSh0cnVlKX0gZ3JhZGllbnQ9XCJhcXVhXCI+XG4gICAgICAgIFNlbmQgTWVzc2FnZVxuICAgICAgPC9NREJCdG4+XG4gICAgPC9NREJDb250YWluZXI+XG4gICk7XG59XG4iXX0=