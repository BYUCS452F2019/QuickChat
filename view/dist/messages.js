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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXNzYWdlcy5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlc1ZpZXciLCJwcm9wcyIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsInVzZXJuYW1lIiwicHVzaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwb2xsZXIiLCJzZXRQb2xsZXIiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ1c2luZ0NoYXRyb29tIiwidGhlbiIsInJlc3BvbnNlIiwic3VjY2VzcyIsInNldE1lc3NhZ2VzIiwiZGF0YSIsIlNlbmRNZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpbWVyIiwic2V0VGltZXIiLCJ0aW1lckRvbmUiLCJzZXRUaW1lckRvbmUiLCJzZW5kTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJlbnN1cmVUaW1lciIsInNldFRpbWVvdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7OztBQUVPLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ2xDLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQURrQztBQUFBO0FBQUE7O0FBQUE7QUFFbEMseUJBQXNCRCxLQUFLLENBQUNDLFFBQTVCLDhIQUFzQztBQUFBLFVBQTNCQyxPQUEyQjs7QUFDcEMsVUFBSUEsT0FBTyxDQUFDQyxRQUFSLElBQW9CSCxLQUFLLENBQUNHLFFBQTlCLEVBQXdDO0FBQ3RDRixRQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FDRSxnQ0FBQywwQkFBRCxRQUNFLDJDQUFJRixPQUFPLENBQUNDLFFBQVosQ0FERixRQUM4QkQsT0FBTyxDQUFDQSxPQUR0QyxDQURGO0FBS0QsT0FORCxNQU1PO0FBQ0xELFFBQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUNFLGdDQUFDLDBCQUFELFFBQ0dGLE9BQU8sQ0FBQ0MsUUFEWCxRQUN1QkQsT0FBTyxDQUFDQSxPQUQv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QUFDLGtCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsSUFEUDtBQUVFLElBQUEsS0FBSyxFQUFFQSxPQUZUO0FBR0UsSUFBQSxRQUFRLEVBQUUsa0JBQUE2QixDQUFDO0FBQUEsYUFBSVgsVUFBVSxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFIYixJQURGLEVBTUUsZ0NBQUMsZ0JBQUQ7QUFBUSxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1ULFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsS0FBakI7QUFBMkMsSUFBQSxRQUFRLEVBQUM7QUFBcEQsb0JBTkYsQ0FERjtBQVlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE1EQkJ0bixcclxuICBNREJJbnB1dCxcclxuICBNREJDb250YWluZXIsXHJcbiAgTURCTGlzdEdyb3VwLFxyXG4gIE1EQkxpc3RHcm91cEl0ZW1cclxufSBmcm9tIFwibWRicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFNlbmRDaGF0LCByZXF1ZXN0R2V0TWVzc2FnZXMgfSBmcm9tIFwiLi9yZXF1ZXN0cy5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lc3NhZ2VzVmlldyhwcm9wcykge1xyXG4gIGNvbnN0IG1lc3NhZ2VzID0gW107XHJcbiAgZm9yIChjb25zdCBtZXNzYWdlIG9mIHByb3BzLm1lc3NhZ2VzKSB7XHJcbiAgICBpZiAobWVzc2FnZS51c2VybmFtZSA9PSBwcm9wcy51c2VybmFtZSkge1xyXG4gICAgICBtZXNzYWdlcy5wdXNoKFxyXG4gICAgICAgIDxNREJMaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgPGI+e21lc3NhZ2UudXNlcm5hbWV9PC9iPjoge21lc3NhZ2UubWVzc2FnZX1cclxuICAgICAgICA8L01EQkxpc3RHcm91cEl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlcy5wdXNoKFxyXG4gICAgICAgIDxNREJMaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAge21lc3NhZ2UudXNlcm5hbWV9OiB7bWVzc2FnZS5tZXNzYWdlfVxyXG4gICAgICAgIDwvTURCTGlzdEdyb3VwSXRlbT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFtwb2xsZXIsIHNldFBvbGxlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwocG9sbGVyKTtcclxuICAgIHNldFBvbGxlcih3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICByZXF1ZXN0R2V0TWVzc2FnZXMocHJvcHMudXNpbmdDaGF0cm9vbSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHByb3BzLnNldE1lc3NhZ2VzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sIDUwMCkpO1xyXG4gIH0sIFtwcm9wcy51c2luZ0NoYXRyb29tXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TURCQ29udGFpbmVyPlxyXG4gICAgICA8TURCTGlzdEdyb3VwPnttZXNzYWdlc308L01EQkxpc3RHcm91cD5cclxuICAgIDwvTURCQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZW5kTWVzc2FnZShwcm9wcykge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RpbWVyRG9uZSwgc2V0VGltZXJEb25lXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRpbWVyRG9uZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICBzZXRUaW1lcihudWxsKTtcclxuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgc2V0VGltZXJEb25lKGZhbHNlKTtcclxuICAgICAgcmVxdWVzdFNlbmRDaGF0KHByb3BzLnVzaW5nQ2hhdHJvb20sIHByb3BzLnVzZXJuYW1lLCBtZXNzYWdlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJDaGF0cm9vbTogXCIgKyBwcm9wcy51c2luZ0NoYXRyb29tKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kIE1lc3NhZ2UgU3VjY2Vzc2Z1bGx5IVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbdGltZXJEb25lLCB0aW1lciwgbWVzc2FnZSwgcHJvcHMudXNpbmdDaGF0cm9vbSwgcHJvcHMudXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgZW5zdXJlVGltZXIgPSBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRpbWVyID09IG51bGwgJiYgbWVzc2FnZSAhPSBcIlwiKSB7XHJcbiAgICAgIHNldFRpbWVyKHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFRpbWVyRG9uZSh0cnVlKSwgNTAwMCkpO1xyXG4gICAgfVxyXG4gIH0sIFttZXNzYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TURCQ29udGFpbmVyPlxyXG4gICAgICA8TURCSW5wdXRcclxuICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8TURCQnRuIG9uQ2xpY2s9eygpID0+IHNldFRpbWVyRG9uZSh0cnVlKX0gZ3JhZGllbnQ9XCJhcXVhXCI+XHJcbiAgICAgICAgU2VuZCBNZXNzYWdlXHJcbiAgICAgIDwvTURCQnRuPlxyXG4gICAgPC9NREJDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXX0=