'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _Snippet = require('./Snippet');

var _Snippet2 = _interopRequireWildcard(_Snippet);

'use strict';

exports['default'] = function (name, snippetProps) {

	snippetProps = snippetProps || {};

	function req() {
		return require('babel-loader!./examples/' + name + '.example');
	}

	return _React2['default'].createClass({

		name: name,

		displayName: 'example_' + name,

		getInitialState: function getInitialState() {
			return {
				props: {}
			};
		},

		componentDidUpdate: function componentDidUpdate() {
			window.cmp = this.refs.cmp;
		},

		componentDidMount: function componentDidMount() {
			window.cmp = this.refs.cmp;
		},

		render: function render() {

			var cmp = _React2['default'].cloneElement(this.state.cmp || req(), { ref: 'cmp' });
			var code = require('raw-loader!../src/examples/' + name + '.example');

			var description;

			if (snippetProps.description) {
				description = _React2['default'].createElement(
					'p',
					null,
					snippetProps.description
				);
			}

			return _React2['default'].createElement(
				'div',
				{ style: { marginTop: 20 } },
				description,
				_React2['default'].createElement(
					'div',
					null,
					cmp
				),
				_React2['default'].createElement(_Snippet2['default'], _extends({}, snippetProps, {
					code: code,
					updateCmp: this.updateCmp
				}))
			);
		},

		updateCmp: function updateCmp(cmp) {
			this.setState({
				cmp: cmp
			});
		}
	});
};

module.exports = exports['default'];