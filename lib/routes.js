'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _Route$DefaultRoute$NotFoundRoute = require('react-router');

var Index = require('./index');
var ExamplesRoute = require('./ExamplesRoute');
var Content = require('./Content');

module.exports = _React2['default'].createElement(
  _Route$DefaultRoute$NotFoundRoute.Route,
  { name: 'app', path: '/', handler: Index },
  _React2['default'].createElement(
    _Route$DefaultRoute$NotFoundRoute.Route,
    { name: 'examples', path: '/examples/:name', handler: ExamplesRoute },
    _React2['default'].createElement(_Route$DefaultRoute$NotFoundRoute.NotFoundRoute, { handler: ExamplesRoute })
  ),
  _React2['default'].createElement(
    _Route$DefaultRoute$NotFoundRoute.Route,
    { path: '/examples', handler: ExamplesRoute },
    _React2['default'].createElement(_Route$DefaultRoute$NotFoundRoute.NotFoundRoute, { handler: ExamplesRoute })
  ),
  _React2['default'].createElement(_Route$DefaultRoute$NotFoundRoute.DefaultRoute, { handler: Content })
);