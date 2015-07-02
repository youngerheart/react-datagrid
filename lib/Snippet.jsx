'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('object-assign');

var _assign2 = _interopRequireWildcard(_assign);

var _CodeMirror = require('./utils/CodeMirrorEditor');

var _CodeMirror2 = _interopRequireWildcard(_CodeMirror);

var _buffer = require('buffer-function');

var _buffer2 = _interopRequireWildcard(_buffer);

'use strict';

var data = window.__DATA = {};

require('codemirror/mode/javascript/javascript');

var req = require.context('./data', true, /^\.\/.*\.js$/);
var prev = Date.now();

req.keys().forEach(function (key) {
	var newKey = key.replace('./', '../data/');
	newKey = newKey.replace('.js', '');

	var value = req(key);
	data[newKey] = value;
});

function emptyFn() {}

var prefix = '\n;var require = (function(){\n\tvar MAP = Object.assign({\n\t\treact: window.React,\n\t\t\'react-datagrid\': window.ReactDataGrid,\n\t\tsorty: window.sorty,\n\t\tfetch: window.fetch\n\t}, __DATA)\n\n\treturn function(path){\n\t\tvar res = MAP[path] || window[path]\n\n\t\tif (!res){\n\t\t\tthrow \'Module "\' + path + \'" not found. Please use one of the following: "\' + Object.keys(MAP).join(\'", "\') + \'".\'\n\t\t}\n\n\t\treturn res\n\t}\n\n})();\n; var module = {\n\texports: null\n};\n';

var suffix = '\nreturn module.exports\n';

var Snippet = _React2['default'].createClass({
	displayName: 'Snippet',

	getInitialState: function getInitialState() {
		return {
			code: this.props.code
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			transformer: function transformer(code) {
				return JSXTransformer.transform(code).code;
			}
		};
	},

	render: function render() {

		var props = this.prepareProps(this.props);

		return _React2['default'].createElement('div', props);
	},

	prepareProps: function prepareProps(thisProps) {
		var props = _assign2['default']({}, thisProps);

		props.className = this.prepareClassName(props);
		props.children = this.prepareChildren(props);

		return props;
	},

	prepareChildren: function prepareChildren(props) {

		var children = [];

		_React2['default'].Children.forEach(props.children, function (child) {
			children.push(child);
		});

		var code = this.state.code;
		var err = this.state.err;
		var border = err ? '1px solid rgb(255, 89, 89)' : '1px solid gray';

		var editor = _React2['default'].createElement(_CodeMirror2['default'], {
			key: 'code',
			ref: 'editor',
			className: 'react-code-mirror',
			lineNumbers: true,
			value: code,
			style: { border: border },
			height: props.height,
			codeText: code,
			onChange: this.handleChange
		});

		children.push(editor);

		if (err) {
			children.push(_React2['default'].createElement(
				'div',
				{ className: 'editor-error' },
				err
			));
		}

		return children;
	},

	handleChange: function handleChange(code) {
		this.setState({ code: code });
	},

	prepareClassName: function prepareClassName(props) {
		var className = props.className || '';

		className += 'snippet';

		return className;
	},

	compileCode: function compileCode() {
		return this.props.transformer(this.state.code);
	},

	componentDidMount: function componentDidMount() {
		this.executeCode = _buffer2['default'](this.executeCode, 300);
	},

	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		// execute code only when the state's not being updated by switching tab
		// this avoids re-displaying the error, which comes after a certain delay
		if (this.props.transformer !== prevProps.transformer || this.state.code !== prevState.code) {
			this.executeCode();
		}
	},

	executeCode: function executeCode() {

		try {
			var compiledCode = this.compileCode();

			compiledCode = prefix + compiledCode + suffix;

			var fn = new Function(compiledCode);
			var cmp = fn();

			this.setState({
				err: null
			});(this.props.updateCmp || emptyFn)(cmp);
		} catch (err) {
			this.setState({
				err: err.toString()
			});
		}

		prev = Date.now();
	}
});

exports['default'] = Snippet;
module.exports = exports['default'];