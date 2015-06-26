'use strict';

require('./index.styl');

var React = require('react');

var App = require('./src');

React.render(<App />, document.getElementById('content'))