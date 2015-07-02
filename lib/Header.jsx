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

var _assign = require('object-assign');

var _assign2 = _interopRequireWildcard(_assign);

var _Link = require('react-router');

var _Centered = require('./centered');

var _Centered2 = _interopRequireWildcard(_Centered);

'use strict';

var gitLogoURL = require('../resources/images/GitHub-Mark-32px.png');
var logoURL = require('../resources/images/logo-simplu-w.png');

var Header = (function (_React$Component) {
	var _class = function Header() {
		_classCallCheck(this, _class);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	};

	_inherits(_class, _React$Component);

	_createClass(_class, [{
		key: 'render',
		value: function render() {

			var center = !this.context.router.isActive('examples');

			return _React2['default'].createElement(
				'div',
				this.prepareProps(this.props),
				_React2['default'].createElement(
					_Centered2['default'],
					{ style: {
							width: center ? null : 'auto', display: 'flex', flexFlow: 'row', alignItems: 'center'
						} },
					_React2['default'].createElement(
						'div',
						null,
						_React2['default'].createElement(
							_Link.Link,
							{ to: '/', style: { textDecoration: 'none', color: 'white' } },
							_React2['default'].createElement('img', { src: logoURL, style: { height: 35 } }),
							_React2['default'].createElement(
								'span',
								{ style: { padding: '0 20px', fontSize: '1.2em' } },
								'Carefully crafted UI components for React'
							)
						),
						_React2['default'].createElement(
							'div',
							{ style: { flex: 1, textAlign: 'right' } },
							_React2['default'].createElement(
								'div',
								{ style: { float: 'right' } },
								_React2['default'].createElement(
									'a',
									{ target: '_blank', className: 'repo-link', href: 'http://github.com/zippyui/react-datagrid', style: { color: 'white', textDecoration: 'none' } },
									_React2['default'].createElement('img', { className: 'github-logo', src: gitLogoURL }),
									'GitHub Repo'
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'prepareProps',
		value: function prepareProps(thisProps) {

			var props = _assign2['default']({}, thisProps);

			props.style = this.prepareStyle(props);
			props.className = this.prepareClassName(props);

			return props;
		}
	}, {
		key: 'prepareStyle',
		value: function prepareStyle(props) {

			var style = _assign2['default']({}, props.defaultStyle, props.style);

			return style;
		}
	}, {
		key: 'prepareClassName',
		value: function prepareClassName(props) {
			var className = props.className || '';

			className += ' header';

			return className;
		}
	}]);

	return _class;
})(_React2['default'].Component);

Header.defaultProps = {
	defaultStyle: {
		boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'
	}
};
Header.contextTypes = {
	router: _React2['default'].PropTypes.func
};

exports['default'] = Header;
module.exports = exports['default'];