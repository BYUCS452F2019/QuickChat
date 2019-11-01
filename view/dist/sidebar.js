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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIkNoYXRyb29tU2lkZWJhciIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJjaGF0cm9vbU5hbWUiLCJzZXRDaGF0cm9vbU5hbWUiLCJoYW5kbGVNb2RhbENoYW5nZSIsImV2ZW50IiwiY2hhdHJvb21FbGVtZW50cyIsImFkZENoYXRyb29tIiwidXNlcm5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwic2V0Q2hhdHJvb21zIiwiY2hhdHJvb21zIiwic2V0VXNpbmdDaGF0cm9vbSIsImNvbnNvbGUiLCJsb2ciLCJjaGF0cm9vbSIsInB1c2giLCJlIiwiZGlzcGxheSIsImFsaWduIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBLHdCQUNYQyxrQkFBTUMsUUFBTixDQUFlLEtBQWYsQ0FEVztBQUFBO0FBQUEsTUFDOUJDLEtBRDhCO0FBQUEsTUFDdkJDLFFBRHVCOztBQUFBLHlCQUVHSCxrQkFBTUMsUUFBTixDQUFlLEVBQWYsQ0FGSDtBQUFBO0FBQUEsTUFFOUJHLFlBRjhCO0FBQUEsTUFFaEJDLGVBRmdCOztBQUdyQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxXQUFJSixRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFaO0FBQUEsR0FBL0I7O0FBQ0EsTUFBTU0sZ0JBQWdCLEdBQUcsRUFBekI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUYsS0FBSyxFQUFJO0FBQzNCSixJQUFBQSxRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0Esc0NBQW1CRSxZQUFuQixFQUFpQ0wsS0FBSyxDQUFDVyxRQUF2QyxFQUFpREMsSUFBakQsQ0FBc0QsVUFBQUMsUUFBUSxFQUFJO0FBQ2hFLFVBQUlBLFFBQVEsQ0FBQ0MsT0FBYixFQUFzQjtBQUNwQmQsUUFBQUEsS0FBSyxDQUFDZSxZQUFOLDhCQUF1QmYsS0FBSyxDQUFDZ0IsU0FBN0IsSUFBd0NYLFlBQXhDO0FBQ0FMLFFBQUFBLEtBQUssQ0FBQ2lCLGdCQUFOLENBQXVCWixZQUF2QjtBQUNBYSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW5CLEtBQVo7QUFDQWtCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxZQUFaO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0FWRDs7QUFOcUM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWtCMUJlLFFBbEIwQjtBQW1CbkNYLE1BQUFBLGdCQUFnQixDQUFDWSxJQUFqQixDQUNFLGdDQUFDLGdCQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUVELFFBRFI7QUFFRSxRQUFBLFFBQVEsRUFBQyxRQUZYO0FBR0UsUUFBQSxPQUFPLEVBQUUsaUJBQUFFLENBQUM7QUFBQSxpQkFBSXRCLEtBQUssQ0FBQ2lCLGdCQUFOLENBQXVCRyxRQUF2QixDQUFKO0FBQUE7QUFIWixTQUtHQSxRQUxILENBREY7QUFuQm1DOztBQWtCckMseUJBQXVCcEIsS0FBSyxDQUFDZ0IsU0FBN0IsOEhBQXdDO0FBQUE7QUFVdkM7QUE1Qm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBOEJyQyxTQUNFLGdDQUFDLHNCQUFELFFBQ0UsZ0NBQUMsZ0JBQUQsUUFDRSxnQ0FBQyxnQkFBRDtBQUFRLElBQUEsSUFBSSxFQUFDO0FBQWIsS0FDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQUVPLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxNQUFBQSxLQUFLLEVBQUU7QUFBMUIsS0FEVDtBQUVFLElBQUEsS0FBSyxFQUFDLGdCQUZSO0FBR0UsSUFBQSxTQUFTLEVBQUM7QUFIWixLQUtFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxpQkFMRixFQU1HZixnQkFOSCxFQU9FLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxRQUFRLE1BRFY7QUFFRSxJQUFBLElBQUksRUFBQyxJQUZQO0FBR0UsSUFBQSxRQUFRLEVBQUMsUUFIWDtBQUlFLElBQUEsT0FBTyxFQUFFRjtBQUpYLEtBTUUsZ0NBQUMsaUJBQUQ7QUFBUyxJQUFBLElBQUksRUFBQyxNQUFkO0FBQXFCLElBQUEsSUFBSSxFQUFDO0FBQTFCLElBTkYsTUFQRixDQURGLENBREYsRUFvQkUsZ0NBQUMsa0JBQUQ7QUFBVSxJQUFBLE1BQU0sRUFBRUosS0FBbEI7QUFBeUIsSUFBQSxNQUFNLEVBQUVJO0FBQWpDLEtBQ0UsZ0NBQUMsd0JBQUQ7QUFBZ0IsSUFBQSxNQUFNLEVBQUVBO0FBQXhCLG9CQURGLEVBSUUsZ0NBQUMsc0JBQUQsUUFDRSxnQ0FBQyxrQkFBRDtBQUNFLElBQUEsS0FBSyxFQUFDLFdBRFI7QUFFRSxJQUFBLElBQUksRUFBQyxNQUZQO0FBR0UsSUFBQSxLQUFLLEVBQUVGLFlBSFQ7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQUcsS0FBSztBQUFBLGFBQUlGLGVBQWUsQ0FBQ0UsS0FBSyxDQUFDaUIsTUFBTixDQUFhQyxLQUFkLENBQW5CO0FBQUE7QUFKakIsSUFERixDQUpGLEVBWUUsZ0NBQUMsd0JBQUQsUUFDRSxnQ0FBQyxnQkFBRDtBQUFRLElBQUEsS0FBSyxFQUFDLFdBQWQ7QUFBMEIsSUFBQSxPQUFPLEVBQUVuQjtBQUFuQyxhQURGLEVBSUUsZ0NBQUMsZ0JBQUQ7QUFBUSxJQUFBLFFBQVEsRUFBQyxPQUFqQjtBQUF5QixJQUFBLE9BQU8sRUFBRUc7QUFBbEMsV0FKRixDQVpGLENBcEJGLENBREYsQ0FERjtBQThDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIE1EQkJ0bixcbiAgTURCSW5wdXQsXG4gIE1EQkNvbnRhaW5lcixcbiAgTURCTW9kYWwsXG4gIE1EQk1vZGFsQm9keSxcbiAgTURCTW9kYWxIZWFkZXIsXG4gIE1EQk1vZGFsRm9vdGVyLFxuICBNREJOYXYsXG4gIE1EQlJvdyxcbiAgTURCQ29sLFxuICBNREJJY29uXG59IGZyb20gXCJtZGJyZWFjdFwiO1xuaW1wb3J0IHsgcmVxdWVzdEFkZENoYXRyb29tIH0gZnJvbSBcIi4vcmVxdWVzdHMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYXRyb29tU2lkZWJhcihwcm9wcykge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoYXRyb29tTmFtZSwgc2V0Q2hhdHJvb21OYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBoYW5kbGVNb2RhbENoYW5nZSA9IGV2ZW50ID0+IHNldE1vZGFsKCFtb2RhbCk7XG4gIGNvbnN0IGNoYXRyb29tRWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBhZGRDaGF0cm9vbSA9IGV2ZW50ID0+IHtcbiAgICBzZXRNb2RhbCghbW9kYWwpO1xuICAgIHJlcXVlc3RBZGRDaGF0cm9vbShjaGF0cm9vbU5hbWUsIHByb3BzLnVzZXJuYW1lKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIHByb3BzLnNldENoYXRyb29tcyhbLi4ucHJvcHMuY2hhdHJvb21zLCBjaGF0cm9vbU5hbWVdKTtcbiAgICAgICAgcHJvcHMuc2V0VXNpbmdDaGF0cm9vbShjaGF0cm9vbU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXRyb29tTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yIChjb25zdCBjaGF0cm9vbSBvZiBwcm9wcy5jaGF0cm9vbXMpIHtcbiAgICBjaGF0cm9vbUVsZW1lbnRzLnB1c2goXG4gICAgICA8TURCQnRuXG4gICAgICAgIG5hbWU9e2NoYXRyb29tfVxuICAgICAgICBncmFkaWVudD1cInB1cnBsZVwiXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gcHJvcHMuc2V0VXNpbmdDaGF0cm9vbShjaGF0cm9vbSl9XG4gICAgICA+XG4gICAgICAgIHtjaGF0cm9vbX1cbiAgICAgIDwvTURCQnRuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNREJDb250YWluZXI+XG4gICAgICA8TURCUm93PlxuICAgICAgICA8TURCQ29sIHNpemU9XCI2XCI+XG4gICAgICAgICAgPE1EQk5hdlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgICBjb2xvcj1cInBlYWNoLWdyYWRpZW50XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgcHktNCBweC0yIG1iLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+UXVpY2tDaGF0PC9oMj5cbiAgICAgICAgICAgIHtjaGF0cm9vbUVsZW1lbnRzfVxuICAgICAgICAgICAgPE1EQkJ0blxuICAgICAgICAgICAgICBmbG9hdGluZ1xuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICBncmFkaWVudD1cInB1cnBsZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2hhbmdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwicGx1c1wiIHNpemU9XCIzeFwiIC8+K1xuICAgICAgICAgICAgPC9NREJCdG4+XG4gICAgICAgICAgPC9NREJOYXY+XG4gICAgICAgIDwvTURCQ29sPlxuXG4gICAgICAgIDxNREJNb2RhbCBpc09wZW49e21vZGFsfSB0b2dnbGU9e2hhbmRsZU1vZGFsQ2hhbmdlfT5cbiAgICAgICAgICA8TURCTW9kYWxIZWFkZXIgdG9nZ2xlPXtoYW5kbGVNb2RhbENoYW5nZX0+XG4gICAgICAgICAgICBBZGQgQ2hhdHJvb21cbiAgICAgICAgICA8L01EQk1vZGFsSGVhZGVyPlxuICAgICAgICAgIDxNREJNb2RhbEJvZHk+XG4gICAgICAgICAgICA8TURCSW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJSb29tIE5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjaGF0cm9vbU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRDaGF0cm9vbU5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9NREJNb2RhbEJvZHk+XG4gICAgICAgICAgPE1EQk1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPE1EQkJ0biBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2hhbmdlfT5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvTURCQnRuPlxuICAgICAgICAgICAgPE1EQkJ0biBncmFkaWVudD1cInBlYWNoXCIgb25DbGljaz17YWRkQ2hhdHJvb219PlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvTURCQnRuPlxuICAgICAgICAgIDwvTURCTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTURCTW9kYWw+XG4gICAgICA8L01EQlJvdz5cbiAgICA8L01EQkNvbnRhaW5lcj5cbiAgKTtcbn1cbiJdfQ==