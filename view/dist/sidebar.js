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
        props.setUsingChatroom(chatroomName);
        console.log(props);
        console.log(chatroomName);
      }
    });
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var chatroom = _step.value;
      chatroomElements.push(_react["default"].createElement(_mdbreact.MDBBtn, {
        name: chatroom,
        gradient: "purple",
        onClick: function onClick(e) {
          return props.setUsingChatroom(chatroom);
        }
      }, chatroom));
    };

    for (var _iterator = props.chatrooms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIkNoYXRyb29tU2lkZWJhciIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJjaGF0cm9vbU5hbWUiLCJzZXRDaGF0cm9vbU5hbWUiLCJoYW5kbGVNb2RhbENoYW5nZSIsImV2ZW50IiwiY2hhdHJvb21FbGVtZW50cyIsImFkZENoYXRyb29tIiwidXNlcm5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwic2V0Q2hhdHJvb21zIiwiY2hhdHJvb21zIiwic2V0VXNpbmdDaGF0cm9vbSIsImNvbnNvbGUiLCJsb2ciLCJjaGF0cm9vbSIsInB1c2giLCJlIiwiZGlzcGxheSIsImFsaWduIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBLHdCQUNYQyxrQkFBTUMsUUFBTixDQUFlLEtBQWYsQ0FEVztBQUFBO0FBQUEsTUFDOUJDLEtBRDhCO0FBQUEsTUFDdkJDLFFBRHVCOztBQUFBLHlCQUVHSCxrQkFBTUMsUUFBTixDQUFlLEVBQWYsQ0FGSDtBQUFBO0FBQUEsTUFFOUJHLFlBRjhCO0FBQUEsTUFFaEJDLGVBRmdCOztBQUdyQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxXQUFJSixRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFaO0FBQUEsR0FBL0I7O0FBQ0EsTUFBTU0sZ0JBQWdCLEdBQUcsRUFBekI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUYsS0FBSyxFQUFJO0FBQzNCSixJQUFBQSxRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0Esc0NBQW1CRSxZQUFuQixFQUFpQ0wsS0FBSyxDQUFDVyxRQUF2QyxFQUFpREMsSUFBakQsQ0FBc0QsVUFBQUMsUUFBUSxFQUFJO0FBQ2hFLFVBQUlBLFFBQVEsQ0FBQ0MsT0FBYixFQUFzQjtBQUNwQmQsUUFBQUEsS0FBSyxDQUFDZSxZQUFOLDhCQUF1QmYsS0FBSyxDQUFDZ0IsU0FBN0IsSUFBd0NYLFlBQXhDO0FBQ0FMLFFBQUFBLEtBQUssQ0FBQ2lCLGdCQUFOLENBQXVCWixZQUF2QjtBQUNBYSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW5CLEtBQVo7QUFDQWtCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxZQUFaO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0FWRDs7QUFOcUM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWtCMUJlLFFBbEIwQjtBQW1CbkNYLE1BQUFBLGdCQUFnQixDQUFDWSxJQUFqQixDQUNFLGdDQUFDLGdCQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUVELFFBRFI7QUFFRSxRQUFBLFFBQVEsRUFBQyxRQUZYO0FBR0UsUUFBQSxPQUFPLEVBQUUsaUJBQUFFLENBQUM7QUFBQSxpQkFBSXRCLEtBQUssQ0FBQ2lCLGdCQUFOLENBQXVCRyxRQUF2QixDQUFKO0FBQUE7QUFIWixTQUtHQSxRQUxILENBREY7QUFuQm1DOztBQWtCckMseUJBQXVCcEIsS0FBSyxDQUFDZ0IsU0FBN0IsOEhBQXdDO0FBQUE7QUFVdkM7QUE1Qm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBOEJyQyxTQUNFLGdDQUFDLHNCQUFELFFBQ0UsZ0NBQUMsZ0JBQUQsUUFDRSxnQ0FBQyxnQkFBRDtBQUFRLElBQUEsSUFBSSxFQUFDO0FBQWIsS0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQUVPLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxNQUFBQSxLQUFLLEVBQUU7QUFBMUIsS0FEVDtBQUVFLElBQUEsS0FBSyxFQUFDLGdCQUZSO0FBR0UsSUFBQSxTQUFTLEVBQUM7QUFIWixLQUtFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxpQkFMRixFQU1HZixnQkFOSCxFQU9FLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxRQUFRLE1BRFY7QUFFRSxJQUFBLElBQUksRUFBQyxJQUZQO0FBR0UsSUFBQSxRQUFRLEVBQUMsUUFIWDtBQUlFLElBQUEsT0FBTyxFQUFFRjtBQUpYLEtBTUUsZ0NBQUMsaUJBQUQ7QUFBUyxJQUFBLElBQUksRUFBQyxNQUFkO0FBQXFCLElBQUEsSUFBSSxFQUFDO0FBQTFCLElBTkYsTUFQRixDQURGLENBREYsRUFvQkUsZ0NBQUMsa0JBQUQ7QUFBVSxJQUFBLE1BQU0sRUFBRUosS0FBbEI7QUFBeUIsSUFBQSxNQUFNLEVBQUVJO0FBQWpDLEtBQ0UsZ0NBQUMsd0JBQUQ7QUFBZ0IsSUFBQSxNQUFNLEVBQUVBO0FBQXhCLG9CQURGLEVBSUUsZ0NBQUMsc0JBQUQsUUFDRSxnQ0FBQyxrQkFBRDtBQUNFLElBQUEsS0FBSyxFQUFDLFdBRFI7QUFFRSxJQUFBLElBQUksRUFBQyxNQUZQO0FBR0UsSUFBQSxLQUFLLEVBQUVGLFlBSFQ7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQUcsS0FBSztBQUFBLGFBQUlGLGVBQWUsQ0FBQ0UsS0FBSyxDQUFDaUIsTUFBTixDQUFhQyxLQUFkLENBQW5CO0FBQUE7QUFKakIsSUFERixDQUpGLEVBWUUsZ0NBQUMsd0JBQUQsUUFDRSxnQ0FBQyxnQkFBRDtBQUFRLElBQUEsS0FBSyxFQUFDLFdBQWQ7QUFBMEIsSUFBQSxPQUFPLEVBQUVuQjtBQUFuQyxhQURGLEVBSUUsZ0NBQUMsZ0JBQUQ7QUFBUSxJQUFBLFFBQVEsRUFBQyxPQUFqQjtBQUF5QixJQUFBLE9BQU8sRUFBRUc7QUFBbEMsV0FKRixDQVpGLENBcEJGLENBREYsQ0FERjtBQThDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBNREJCdG4sXHJcbiAgTURCSW5wdXQsXHJcbiAgTURCQ29udGFpbmVyLFxyXG4gIE1EQk1vZGFsLFxyXG4gIE1EQk1vZGFsQm9keSxcclxuICBNREJNb2RhbEhlYWRlcixcclxuICBNREJNb2RhbEZvb3RlcixcclxuICBNREJOYXYsXHJcbiAgTURCUm93LFxyXG4gIE1EQkNvbCxcclxuICBNREJJY29uXHJcbn0gZnJvbSBcIm1kYnJlYWN0XCI7XHJcbmltcG9ydCB7IHJlcXVlc3RBZGRDaGF0cm9vbSB9IGZyb20gXCIuL3JlcXVlc3RzLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhdHJvb21TaWRlYmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoYXRyb29tTmFtZSwgc2V0Q2hhdHJvb21OYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2hhbmdlID0gZXZlbnQgPT4gc2V0TW9kYWwoIW1vZGFsKTtcclxuICBjb25zdCBjaGF0cm9vbUVsZW1lbnRzID0gW107XHJcblxyXG4gIGNvbnN0IGFkZENoYXRyb29tID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0TW9kYWwoIW1vZGFsKTtcclxuICAgIHJlcXVlc3RBZGRDaGF0cm9vbShjaGF0cm9vbU5hbWUsIHByb3BzLnVzZXJuYW1lKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICBwcm9wcy5zZXRDaGF0cm9vbXMoWy4uLnByb3BzLmNoYXRyb29tcywgY2hhdHJvb21OYW1lXSk7XHJcbiAgICAgICAgcHJvcHMuc2V0VXNpbmdDaGF0cm9vbShjaGF0cm9vbU5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGF0cm9vbU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmb3IgKGNvbnN0IGNoYXRyb29tIG9mIHByb3BzLmNoYXRyb29tcykge1xyXG4gICAgY2hhdHJvb21FbGVtZW50cy5wdXNoKFxyXG4gICAgICA8TURCQnRuXHJcbiAgICAgICAgbmFtZT17Y2hhdHJvb219XHJcbiAgICAgICAgZ3JhZGllbnQ9XCJwdXJwbGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gcHJvcHMuc2V0VXNpbmdDaGF0cm9vbShjaGF0cm9vbSl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hhdHJvb219XHJcbiAgICAgIDwvTURCQnRuPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TURCQ29udGFpbmVyPlxyXG4gICAgICA8TURCUm93PlxyXG4gICAgICAgIDxNREJDb2wgc2l6ZT1cIjZcIj5cclxuICAgICAgICAgIDxNREJOYXZcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgIGNvbG9yPVwicGVhY2gtZ3JhZGllbnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHB5LTQgcHgtMiBtYi00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5RdWlja0NoYXQ8L2gyPlxyXG4gICAgICAgICAgICB7Y2hhdHJvb21FbGVtZW50c31cclxuICAgICAgICAgICAgPE1EQkJ0blxyXG4gICAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICBncmFkaWVudD1cInB1cnBsZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwicGx1c1wiIHNpemU9XCIzeFwiIC8+K1xyXG4gICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgIDwvTURCTmF2PlxyXG4gICAgICAgIDwvTURCQ29sPlxyXG5cclxuICAgICAgICA8TURCTW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXtoYW5kbGVNb2RhbENoYW5nZX0+XHJcbiAgICAgICAgICA8TURCTW9kYWxIZWFkZXIgdG9nZ2xlPXtoYW5kbGVNb2RhbENoYW5nZX0+XHJcbiAgICAgICAgICAgIEFkZCBDaGF0cm9vbVxyXG4gICAgICAgICAgPC9NREJNb2RhbEhlYWRlcj5cclxuICAgICAgICAgIDxNREJNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgIDxNREJJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUm9vbSBOYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NoYXRyb29tTmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0Q2hhdHJvb21OYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01EQk1vZGFsQm9keT5cclxuICAgICAgICAgIDxNREJNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPE1EQkJ0biBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2hhbmdlfT5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgICAgPE1EQkJ0biBncmFkaWVudD1cInBlYWNoXCIgb25DbGljaz17YWRkQ2hhdHJvb219PlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XHJcbiAgICAgICAgPC9NREJNb2RhbD5cclxuICAgICAgPC9NREJSb3c+XHJcbiAgICA8L01EQkNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdfQ==