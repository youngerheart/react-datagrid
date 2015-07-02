'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('object-assign');

var _assign2 = _interopRequireWildcard(_assign);

var _normalize = require('react-style-normalizer');

var _normalize2 = _interopRequireWildcard(_normalize);

var _Centered = require('./centered');

var _Centered2 = _interopRequireWildcard(_Centered);

var _ReactButton = require('react-button');

var _ReactButton2 = _interopRequireWildcard(_ReactButton);

var _SvgIcon = require('./utils/SvgIcon');

var _SvgIcon2 = _interopRequireWildcard(_SvgIcon);

'use strict';

var backgroundURL = require('../resources/images/bkg-pattern.png');

function toStyle() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var target = {};

	args.forEach(function (a) {
		_assign2['default'](target, a);
	});

	return _normalize2['default'](target);
}

var gridLogo = require('../resources/svg/grid-logo.svg');
var TURQUOISE = '#8CC9DD';
var GRAY = '#494E4F';

var theme = {
	style: {
		background: 'transparent',
		color: GRAY,
		border: '3px solid white',
		padding: '10px 20px',
		fontWeight: 'bold'
	},
	overStyle: {
		background: 'white'
	}
};

var box = _normalize2['default']({
	flex: 1,
	border: '2px solid ' + TURQUOISE,
	marginLeft: 20,
	padding: 20,
	color: GRAY
});

var Button = (function (_React$Component) {
	function Button() {
		_classCallCheck(this, Button);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Button, _React$Component);

	_createClass(Button, [{
		key: 'render',
		value: function render() {
			return _React2['default'].createElement(_ReactButton2['default'], _extends({ theme: theme, applyDefaultTheme: false }, this.props));
		}
	}]);

	return Button;
})(_React2['default'].Component);

var Box = (function (_React$Component2) {
	function Box() {
		_classCallCheck(this, Box);

		if (_React$Component2 != null) {
			_React$Component2.apply(this, arguments);
		}
	}

	_inherits(Box, _React$Component2);

	_createClass(Box, [{
		key: 'render',
		value: function render() {
			var props = _assign2['default']({}, this.props);

			var children = [];

			_React2['default'].Children.forEach(props.children, function (child) {
				children.push(child);
			});

			var title = children[0];
			var body = children[1];

			props.className = (props.className || '') + ' feature-box';
			props.style = toStyle(box, props.style, { display: 'flex', flexFlow: 'column', justifyContent: 'space-between' });

			return _React2['default'].createElement(
				'div',
				props,
				_React2['default'].createElement(
					'h3',
					{ style: { textTransform: 'uppercase' } },
					title
				),
				_React2['default'].createElement(
					'div',
					{ style: { lineHeight: '1.8em' } },
					body
				),
				_React2['default'].createElement(
					Button,
					{ style: { background: TURQUOISE, alignSelf: 'flex-end' }, href: props.href },
					this.props.linkText || 'See demo'
				)
			);
		}
	}]);

	return Box;
})(_React2['default'].Component);

var STRIP_PADDING = '30px 10px';
var Content = (function (_React$Component3) {
	var _class = function Content() {
		_classCallCheck(this, _class);

		if (_React$Component3 != null) {
			_React$Component3.apply(this, arguments);
		}
	};

	_inherits(_class, _React$Component3);

	_createClass(_class, [{
		key: 'render',
		value: function render() {

			return _React2['default'].createElement(
				'div',
				{ className: 'content' },
				_React2['default'].createElement(
					'div',
					{ style: _normalize2['default']({ padding: STRIP_PADDING, display: 'flex', flexFlow: 'column', justifyContent: 'center', color: 'white', background: 'url("' + backgroundURL + '")' }) },
					_React2['default'].createElement(
						_Centered2['default'],
						{ style: { display: 'block' } },
						_React2['default'].createElement(
							'div',
							null,
							_React2['default'].createElement(
								'h2',
								{ style: { marginTop: 0 } },
								'A carefully crafted DataGrid for React'
							),
							_React2['default'].createElement(
								'p',
								null,
								_React2['default'].createElement(_SvgIcon2['default'], { svg: gridLogo, style: { verticalAlign: 'middle', display: 'inline-block', marginRight: 20 } }),
								_React2['default'].createElement(
									'code',
									{ style: { fontSize: '1.5em' } },
									'$ npm install react-datagrid --save '
								)
							),
							_React2['default'].createElement(
								Button,
								{ className: 'demo-button', href: this.context.router.makeHref('examples', { name: 'basic' }) },
								'SHOW DEMO'
							),
							_React2['default'].createElement(
								Button,
								{ style: { marginLeft: 30 }, className: 'demo-button', href: 'https://github.com/zippyui/react-datagrid/blob/master/README.md' },
								'SEE README DOCS'
							)
						)
					)
				),
				_React2['default'].createElement(
					'div',
					{ style: { padding: STRIP_PADDING } },
					_React2['default'].createElement(
						_Centered2['default'],
						null,
						_React2['default'].createElement(
							'div',
							{ style: { display: 'flex', flexFlow: 'row', alignItems: 'stretch' } },
							_React2['default'].createElement(
								Box,
								{ style: { marginLeft: 0 }, linkText: 'Show me a proof', href: this.context.router.makeHref('examples', { name: 'large-data-array' }) },
								_React2['default'].createElement(
									'span',
									null,
									'zippy performance'
								),
								_React2['default'].createElement(
									'div',
									null,
									_React2['default'].createElement(
										'p',
										null,
										'Performance stays the same, no matter how many records you have in the grid.'
									),
									_React2['default'].createElement(
										'p',
										null,
										'You can start small or end-up with a million records, the grid will remain snappy!'
									)
								)
							),
							_React2['default'].createElement(
								Box,
								{ href: this.context.router.makeHref('examples', { name: 'sorting' }) },
								_React2['default'].createElement(
									'span',
									null,
									'production ready'
								),
								_React2['default'].createElement(
									'div',
									null,
									_React2['default'].createElement(
										'p',
										null,
										'The grid comes with a lot of functionality built-in.'
									),
									_React2['default'].createElement(
										'p',
										null,
										'No need to look further to support for sorting/filtering/selection/column reordering, etc'
									)
								)
							),
							_React2['default'].createElement(
								Box,
								{ linkText: 'Show customized example', href: this.context.router.makeHref('examples', { name: 'custom-row-styling' }) },
								_React2['default'].createElement(
									'span',
									null,
									'customizable'
								),
								_React2['default'].createElement(
									'div',
									null,
									_React2['default'].createElement(
										'p',
										null,
										'Basically you can customize everything.'
									),
									_React2['default'].createElement(
										'p',
										null,
										'Start with changing how cell contents are rendered, what styles are applied or totally modifying how selection behaves'
									)
								)
							)
						)
					)
				),
				_React2['default'].createElement(
					'div',
					{ style: { padding: STRIP_PADDING, display: 'flex', flexFlow: 'column', justifyContent: 'center', color: 'white', background: 'url("' + backgroundURL + '")' }, className: 'strip background' },
					_React2['default'].createElement(
						_Centered2['default'],
						{ style: { display: 'block' } },
						_React2['default'].createElement(
							'div',
							null,
							_React2['default'].createElement(
								'h2',
								{ style: { marginTop: 0 } },
								'Built on top of React, published on NPM'
							),
							_React2['default'].createElement(
								'p',
								{ style: { fontSize: '1.5em' } },
								'Just run'
							),
							_React2['default'].createElement(
								'p',
								{ style: { fontSize: '1.5em' } },
								_React2['default'].createElement(
									'code',
									null,
									'$ npm install react-datagrid --save '
								)
							),
							_React2['default'].createElement(
								'p',
								{ style: { fontSize: '1.5em' } },
								'and you are ready to use'
							),
							_React2['default'].createElement(
								Button,
								{ className: 'demo-button', href: this.context.router.makeHref('examples', { name: 'basic' }) },
								'SEE LIVE EXAMPLES'
							)
						)
					)
				)
			);
		}
	}]);

	return _class;
})(_React2['default'].Component);

Content.contextTypes = {
	router: _React2['default'].PropTypes.func
};

exports['default'] = Content;
module.exports = exports['default'];