'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Link = require('react-router');

var _humanize = require('ustring');

var _examples = require('./examples');

'use strict';

var menuItems = _examples.array.map(function (example) {

	var name = example.prototype.name;

	return {
		name: name,
		text: _humanize.humanize(name)
	};
});

var renderMenuItem = function renderMenuItem(item, index) {
	return React.createElement(
		'li',
		{ key: index },
		React.createElement(
			_Link.Link,
			{ activeStyle: { fontWeight: 'bold' }, to: 'examples', params: { name: item.name } },
			item.text
		)
	);
};

exports['default'] = function () {
	return React.createElement(
		'ul',
		{ className: 'example-menu' },
		menuItems.map(renderMenuItem)
	);
};

module.exports = exports['default'];