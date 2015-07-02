'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('object-assign');

var _assign2 = _interopRequireWildcard(_assign);

'use strict';

function getSvgBody(svg) {
  return svg.replace('module.exports = ', '')
  // remove xml prolog
  .replace(/<\?xml[\s\S]*?>/gi, '')
  // remove doctype
  .replace(/<!doctype[\s\S]*?>/gi, '')
  // remove comments
  .replace(/<!--[\s\S]*?-->/g, '')
  // remove hardcoded dimensions
  // .replace(/width="\d+(\.\d+)?(px)?"/gi, "")
  // .replace(/height="\d+(\.\d+)?(px)?"/gi, "")
  .trim();
}

exports['default'] = _React2['default'].createClass({
  displayName: 'SvgIcon',

  propTypes: {
    svg: _React2['default'].PropTypes.string.isRequired,
    id: _React2['default'].PropTypes.string,
    modifier: _React2['default'].PropTypes.string,
    color: _React2['default'].PropTypes.string
  },

  render: function render() {

    var props = _assign2['default']({}, this.props);
    var svg = props.svg;

    if (!svg.trim().match(/^\s*</g)) {
      console.warn('Please use <IconSvg> with <svg> file. props= ' + JSON.stringify(props));
    }

    var style = _assign2['default']({}, props.style);
    if (props.color) {
      style.fill = 'red' //props.color
      ;
    }
    if (props.size) {
      style.fontSize = props.size;
    }

    return _React2['default'].createElement('span', _extends({}, props, {
      dangerouslySetInnerHTML: { __html: getSvgBody(svg) } }));
  }
});
module.exports = exports['default'];