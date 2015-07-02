'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var IS_MOBILE = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);

var CodeMirrorEditor = _React2['default'].createClass({ displayName: 'CodeMirrorEditor',
  propTypes: {
    lineNumbers: _React2['default'].PropTypes.bool,
    onChange: _React2['default'].PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      lineNumbers: false
    };
  },
  componentDidMount: function componentDidMount() {
    if (IS_MOBILE) {
      return;
    }this.editor = CodeMirror.fromTextArea(_React2['default'].findDOMNode(this.refs.editor), {
      mode: 'javascript',
      lineNumbers: this.props.lineNumbers,
      lineWrapping: true,
      smartIndent: false, // javascript mode does bad things with jsx indents
      matchBrackets: true,
      theme: 'solarized',
      readOnly: this.props.readOnly
    });
    this.editor.on('change', this.handleChange);
  },

  componentDidUpdate: function componentDidUpdate() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  },

  handleChange: function handleChange() {
    if (!this.props.readOnly) {
      this.props.onChange && this.props.onChange(this.editor.getValue());
    }
  },

  render: function render() {
    // wrap in a div to fully contain CodeMirror
    var editor;

    if (IS_MOBILE) {
      editor = _React2['default'].createElement('pre', { style: { overflow: 'scroll' } }, this.props.codeText);
    } else {
      editor = _React2['default'].createElement('textarea', { ref: 'editor', defaultValue: this.props.codeText });
    }

    return _React2['default'].createElement('div', { style: this.props.style, className: this.props.className }, editor);
  }
});

var selfCleaningTimeout = {
  componentDidUpdate: function componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },

  setTimeout: (function (_setTimeout) {
    function setTimeout() {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return setTimeout.toString();
    };

    return setTimeout;
  })(function () {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  })
};

var ReactPlayground = _React2['default'].createClass({ displayName: 'ReactPlayground',
  mixins: [selfCleaningTimeout],

  MODES: { JSX: 'JSX', JS: 'JS' }, //keyMirror({JSX: true, JS: true}),

  propTypes: {
    codeText: _React2['default'].PropTypes.string.isRequired,
    transformer: _React2['default'].PropTypes.func,
    renderCode: _React2['default'].PropTypes.bool,
    showCompiledJSTab: _React2['default'].PropTypes.bool,
    showLineNumbers: _React2['default'].PropTypes.bool,
    editorTabTitle: _React2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      transformer: function transformer(code) {
        return JSXTransformer.transform(code).code;
      },
      editorTabTitle: 'Live JSX Editor',
      showCompiledJSTab: true,
      showLineNumbers: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      mode: this.MODES.JSX,
      code: this.props.codeText };
  },

  handleCodeChange: function handleCodeChange(value) {
    this.setState({ code: value });
    this.executeCode();
  },

  handleCodeModeSwitch: function handleCodeModeSwitch(mode) {
    this.setState({ mode: mode });
  },

  compileCode: function compileCode() {
    return this.props.transformer(this.state.code);
  },

  render: function render() {
    var isJS = this.state.mode === this.MODES.JS;
    var compiledCode = '';
    try {
      compiledCode = this.compileCode();
    } catch (err) {}

    var JSContent = _React2['default'].createElement(CodeMirrorEditor, {
      key: 'js',
      className: 'playgroundStage CodeMirror-readonly',
      onChange: this.handleCodeChange,
      codeText: compiledCode,
      readOnly: true,
      lineNumbers: this.props.showLineNumbers });

    var JSXContent = _React2['default'].createElement(CodeMirrorEditor, {
      key: 'jsx',
      onChange: this.handleCodeChange,
      className: 'playgroundStage',
      codeText: this.state.code,
      lineNumbers: this.props.showLineNumbers });

    var JSXTabClassName = 'playground-tab' + (isJS ? '' : ' playground-tab-active');
    var JSTabClassName = 'playground-tab' + (isJS ? ' playground-tab-active' : '');

    var JSTab = _React2['default'].createElement('div', {
      className: JSTabClassName,
      onClick: this.handleCodeModeSwitch.bind(this, this.MODES.JS) }, 'Compiled JS');

    var JSXTab = _React2['default'].createElement('div', {
      className: JSXTabClassName,
      onClick: this.handleCodeModeSwitch.bind(this, this.MODES.JSX) }, this.props.editorTabTitle);

    return _React2['default'].createElement('div', { className: 'playground' }, _React2['default'].createElement('div', null, JSXTab, this.props.showCompiledJSTab && JSTab), _React2['default'].createElement('div', { className: 'playgroundCode' }, isJS ? JSContent : JSXContent), _React2['default'].createElement('div', { className: 'playgroundPreview' }, _React2['default'].createElement('div', { ref: 'mount' })));
  },

  componentDidMount: function componentDidMount() {
    this.executeCode();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.props.transformer !== prevProps.transformer || this.state.code !== prevState.code) {
      this.executeCode();
    }
  },

  executeCode: function executeCode() {
    var mountNode = _React2['default'].findDOMNode(this.refs.mount);

    try {
      _React2['default'].unmountComponentAtNode(mountNode);
    } catch (e) {}

    try {
      var compiledCode = this.compileCode();
      if (this.props.renderCode) {
        _React2['default'].render(_React2['default'].createElement(CodeMirrorEditor, { codeText: compiledCode, readOnly: true }), mountNode);
      } else {

        compiledCode = 'var require = function(name){ debugger; return {React:window.React} };' + compiledCode;
        console.log(compiledCode);
        eval(compiledCode);
      }
    } catch (err) {
      this.setTimeout(function () {
        _React2['default'].render(_React2['default'].createElement('div', { className: 'playgroundError' }, err.toString()), mountNode);
      }, 500);
    }
  }
});

module.exports = ReactPlayground;