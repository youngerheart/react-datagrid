'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
'use strict';

var React = require('react');
var normalize = require('react-style-normalizer');

var Centered = require('./centered');

var Header = require('./Header');
var Body = require('./Body');
var Footer = require('./Footer');

window.ReactDataGrid = require('react-datagrid');
window.sorty = require('sorty');
require('whatwg-fetch'); //exposes window.fetch
Object.assign = require('object-assign');
Object.keys = Object.keys || require('object-keys');

exports['default'] = React.createClass({

	displayName: 'DemoIndex',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'flexbox flex-column', style: { display: 'flex', flexFlow: 'column', minHeight: '100%' } },
			React.createElement(Header, null),
			React.createElement(Body, null),
			React.createElement(Footer, null)
		);
	}
});
module.exports = exports['default'];