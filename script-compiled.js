"use strict";

var _config = _interopRequireDefault(require("./config.js"));

var _tooltip = _interopRequireDefault(require("./templates/tooltip.js"));

var _addCss = _interopRequireDefault(require("./helpers/add-css.js"));

var _checkElements = require("./helpers/check-elements.js");

var _throttle = _interopRequireDefault(require("./helpers/throttle.js"));

var _tippy = _interopRequireDefault(require("./vendors/tippy.js"));

var _hover = _interopRequireDefault(require("./events/hover.js"));

var _click = _interopRequireDefault(require("./events/click.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Globals
var button = document.createElement("button");
button.classList.add("gthr-btn");
var overlay = document.createElement("div");
overlay.classList.add("gthr-overlay");
var body = document.body;
var throttledEvent = (0, _throttle["default"])(function (e) {
  return (0, _hover["default"])(e);
}, 100);
var commentMode = false;
var id = null;
var tippyInstance = null;

var updateButton = function updateButton() {
  if (commentMode) {
    button.innerHTML = "\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n\t\t\t\t<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n\t\t\t</svg>\n\t\t\tClose feedback\n\t\t";
  } else {
    button.innerHTML = "\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n\t\t\t\t<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z\" />\n\t\t\t</svg>\n\t\t\tGive feedback\n\t\t";
  }
};

var renderElements = function renderElements() {
  body.insertBefore(button, body.firstChild);
  button.addEventListener("click", toggleCommentMode);
};

var handleInput = function handleInput(e) {
  var placeholder = document.querySelector(".gthr-tooltip__placeholder");

  if (e.target.value) {
    placeholder.style.visibility = "hidden";
  } else {
    placeholder.style.visibility = "visible";
  }
};

var destroyTippy = function destroyTippy() {
  console.log(tippyInstance);
  tippyInstance.destroy();
  tippyInstance = null;
};

var handlePost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var input;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = document.querySelector(".gthr-tooltip__input");
            console.log(input.value);
            _context.next = 4;
            return console.log("fetch");

          case 4:
            tippyInstance.destroy();
            tippyInstance = null;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handlePost() {
    return _ref.apply(this, arguments);
  };
}();

var initTippy = function initTippy(el) {
  tippy(el, {
    content: _tooltip["default"],
    trigger: 'click',
    allowHTML: true,
    animation: 'scale-subtle',
    arrow: false,
    duration: 100,
    interactiveDebounce: 100,
    interactiveBorder: 30,
    offset: [0, 20],
    placement: 'auto-start',
    interactive: true // onMount() {
    // 	const input = document.querySelector(".gthr-tooltip__input");
    // 	const postBtn = document.querySelector(".gthr-tooltip__action--primary");
    // 	const cancelBtn = document.querySelector(".gthr-tooltip__action--secondary");
    // 	input.addEventListener("input", handleInput);
    // 	postBtn.addEventListener("click", handlePost);
    // 	cancelBtn.addEventListener("click", destroyTippy);
    // },

  });
};

var addComment = function addComment(el) {
  var dot = document.createElement("span");
  dot.classList.add("gthr-dot");
  dot.textContent = "2";

  if (!el.style.position) {
    el.style.position = "relative";
  }

  el.appendChild(dot); // initTippy(dot);
};

var handleCommentMode = function handleCommentMode() {
  body.addEventListener("click", function (e) {
    return (0, _click["default"])(e, addComment);
  });
  body.addEventListener("mousemove", throttledEvent, false);
  body.appendChild(overlay);
};

var cleanupCommentMode = function cleanupCommentMode() {
  body.removeEventListener("click", function (e) {
    return (0, _click["default"])(e, addComment);
  });
  body.removeEventListener("mousemove", throttledEvent, false);
  (0, _checkElements.checkHighlightedElement)();
  overlay.remove();
};

var toggleCommentMode = function toggleCommentMode(e) {
  e.stopPropagation();
  commentMode = !commentMode;
  updateButton();

  if (commentMode) {
    setTimeout(handleCommentMode);
  } else {
    cleanupCommentMode();
  }
};

var getComments = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // await fetch
            console.log(id);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getComments() {
    return _ref2.apply(this, arguments);
  };
}();

var init = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var scriptElement;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _tippy["default"])();
            (0, _addCss["default"])("".concat(_config["default"].SCRIPT_URL, "/main.css"));
            scriptElement = document.querySelector("script[src^='".concat(_config["default"].SCRIPT_URL, "']"));
            id = scriptElement.src.split("?id=")[1];
            _context3.next = 6;
            return getComments();

          case 6:
            updateButton();
            renderElements();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function init() {
    return _ref3.apply(this, arguments);
  };
}();

init();
