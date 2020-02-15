'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

var _toggle = require('./playground/toggle');

var _toggle2 = _interopRequireDefault(_toggle);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRoot = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), appRoot);
