var React = require('react-native');
var { AppRegistry } = React;

var CurrentComponent = require("./components/3-EventHandler");

var Main = React.createClass({

  render: function() {
    return (<CurrentComponent></CurrentComponent>);
  }

});

AppRegistry.registerComponent('Main', () => Main);