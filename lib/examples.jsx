'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _example = require('./example-template');

var _example2 = _interopRequireWildcard(_example);

var all = [_example2['default']('basic', { height: 470,
	description: _React2['default'].createElement(
		'div',
		null,
		_React2['default'].createElement(
			'h3',
			null,
			'DataGrid features:'
		),
		_React2['default'].createElement(
			'ul',
			{ style: { lineHeight: '1.5em' } },
			_React2['default'].createElement(
				'li',
				null,
				'Great rendering performance - even with millions of records'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Sized and flexible columns'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Single and multiple selection support'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Grouping'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Custom styling'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Custom cell rendering'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Support for sorting'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Support for filtering'
			),
			_React2['default'].createElement(
				'li',
				null,
				'Visible/hidden columns'
			)
		)
	)
}), _example2['default']('reorder-columns', { height: 450 }), _example2['default']('column-resizing', {
	height: 350,
	description: _React2['default'].createElement(
		'div',
		null,
		_React2['default'].createElement(
			'p',
			null,
			'Columns are flexible via flexbox. Specify a ',
			_React2['default'].createElement(
				'b',
				null,
				_React2['default'].createElement(
					'code',
					null,
					'flex'
				)
			),
			' property for this. Unless a column specifies a ',
			_React2['default'].createElement(
				'b',
				null,
				_React2['default'].createElement(
					'code',
					null,
					'flex'
				)
			),
			' or a ',
			_React2['default'].createElement(
				'b',
				null,
				_React2['default'].createElement(
					'code',
					null,
					'width'
				)
			),
			' property, it is assumed to have ',
			_React2['default'].createElement(
				'b',
				null,
				_React2['default'].createElement(
					'code',
					null,
					'flex: 1'
				)
			),
			'. You can also specify a ',
			_React2['default'].createElement(
				'b',
				null,
				_React2['default'].createElement(
					'code',
					null,
					'minWidth'
				)
			),
			' property.'
		),
		_React2['default'].createElement(
			'p',
			null,
			'And of course, horizontal scrollbars show when needed. (',
			_React2['default'].createElement(
				'b',
				null,
				'shift + scroll'
			),
			' for horizontal scrolling)'
		)
	)
}), _example2['default']('single-selection', {
	height: 350
}), _example2['default']('multiple-selection', {
	height: 350
}), _example2['default']('large-data-array', {
	height: 450,
	description: _React2['default'].createElement(
		'div',
		null,
		_React2['default'].createElement(
			'p',
			null,
			'You can have ',
			_React2['default'].createElement(
				'b',
				null,
				'huge'
			),
			' amounts of data in a grid.'
		),
		_React2['default'].createElement(
			'p',
			null,
			'We have tested it with ',
			_React2['default'].createElement(
				'b',
				null,
				'1.000.000'
			),
			' records. '
		),
		_React2['default'].createElement(
			'p',
			null,
			'In this demo, we are remotely fetching a json with ',
			_React2['default'].createElement(
				'b',
				null,
				'50.000 records'
			),
			' and showing them in the grid, so please wait a bit until the json is loaded. The browser might freeze for a moment while doing the JSON.parse. After this, the grid does its job and keeps everything running smoothly.'
		),
		_React2['default'].createElement(
			'p',
			null,
			'In any case, the grid remains snappy no matter how large the data array is, since we only render a small subset of all data.'
		)
	)
}), _example2['default']('sorting', {
	height: 550,
	description: _React2['default'].createElement(
		'div',
		null,
		_React2['default'].createElement(
			'p',
			null,
			'The grid below is initially rendered as sorted, but you can modify sorting by clicking a column header.'
		),
		_React2['default'].createElement(
			'p',
			null,
			'You can sort by multiple columns. Clicking on a column header multiple times sorts by that column ascending, then descending and them removes the sorting. Clicking again repeats this cicle'
		),
		_React2['default'].createElement(
			'p',
			null,
			'For numeric columns, specify ',
			_React2['default'].createElement(
				'b',
				null,
				_React2['default'].createElement(
					'code',
					null,
					'type: "number"'
				)
			),
			' in the column props.'
		)
	)
}), _example2['default']('grouping', {
	height: 350
}), _example2['default']('filtering', { height: 450 }), _example2['default']('empty-text-for-no-records', { height: 350 }), _example2['default']('loading-grid', { height: 350 }), _example2['default']('custom-column-styling', { height: 350 }), _example2['default']('custom-column-rendering', { height: 350 }), _example2['default']('custom-row-styling', { height: 350 }), _example2['default']('custom-cell-borders', { height: 350 }), _example2['default']('text-align-and-custom-row-height', { height: 350 }), _example2['default']('restore-grid-state', { height: 750 }), _example2['default']('remote-data-source', {
	height: 400,
	description: _React2['default'].createElement(
		'div',
		null,
		_React2['default'].createElement(
			'p',
			null,
			'Based on the type of the ',
			_React2['default'].createElement(
				'b',
				null,
				'dataSource'
			),
			' prop, you have:',
			_React2['default'].createElement(
				'ul',
				null,
				_React2['default'].createElement(
					'li',
					null,
					'Array - local data'
				),
				_React2['default'].createElement(
					'li',
					null,
					'String/Function/Promise - remote data'
				)
			)
		)
	)
}), _example2['default']('remote-data-source-with-jquery', { height: 450 }), _example2['default']('remote-data-source-custom-page-size', { height: 450 }), _example2['default']('remote-data-source-pagesizes', { height: 450 }), _example2['default']('remote-data-source-no-pagination', { height: 450 }), _example2['default']('remote-data-source-custom-reload', { height: 450,
	description: _React2['default'].createElement(
		'div',
		null,
		_React2['default'].createElement(
			'p',
			null,
			'The example proves both controlled ',
			_React2['default'].createElement(
				'b',
				null,
				'page'
			),
			' and ',
			_React2['default'].createElement(
				'b',
				null,
				'pageSize'
			),
			' props, as well as using the ',
			_React2['default'].createElement(
				'b',
				null,
				'reload'
			),
			' method on the grid'
		),
		_React2['default'].createElement(
			'p',
			null,
			'Hit the reload button to refresh the grid.'
		)
	)
}), _example2['default']('remote-data-source-hide-page-size', {
	height: 450,
	description: _React2['default'].createElement(
		'div',
		null,
		'You can hide the ',
		_React2['default'].createElement(
			'b',
			null,
			'pageSize <select>'
		),
		' if you want to.'
	)
}), _example2['default']('remote-data-source-colored-buttons', {
	height: 450,
	description: _React2['default'].createElement(
		'div',
		null,
		'The example below shows how you can change icon colors and height, and also hide the refresh icon'
	)
})];

var allMap = {};

all.map(function (item) {
	allMap[item.prototype.name] = item;
});

module.exports = {
	map: allMap,
	array: all
};