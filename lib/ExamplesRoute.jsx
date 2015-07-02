'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _normalize = require('react-style-normalizer');

var _normalize2 = _interopRequireWildcard(_normalize);

var _menu = require('./examplesMenu');

var _menu2 = _interopRequireWildcard(_menu);

var _examples = require('./examples');

var _RouteHandler = require('react-router');

'use strict';

var style = _normalize2['default']({
	display: 'flex',
	marginBottom: 10,
	marginRight: 10,
	flex: 1,
	maxWidth: '100%'
});

var Examples = (function (_React$Component) {
	var _class = function Examples() {
		_classCallCheck(this, _class);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	};

	_inherits(_class, _React$Component);

	_createClass(_class, [{
		key: 'render',
		value: function render() {
			var exampleName = this.context.router.getCurrentParams().name || 'basic';
			var Cmp = _examples.map[exampleName];
			var content;

			if (!Cmp) {
				content = _React2['default'].createElement(
					'b',
					null,
					'Sorry, example not found'
				);
			} else {
				content = _React2['default'].createElement(Cmp, null);
			}

			return _React2['default'].createElement(
				'div',
				{
					className: 'flexbox flex-row',
					style: style
				},
				_React2['default'].createElement(
					'div',
					{ style: _normalize2['default']({ paddingTop: 20, paddingLeft: 20, flex: 'none' }) },
					_menu2['default']()
				),
				_React2['default'].createElement(
					'div',
					{ style: _normalize2['default']({ minWidth: 0, flex: '1 1 100%' }) },
					content
				)
			);
		}
	}]);

	return _class;
})(_React2['default'].Component);

Examples.contextTypes = {
	router: _React2['default'].PropTypes.func
};

Examples.displayName = 'Examples';

exports['default'] = Examples;
module.exports = exports['default'];