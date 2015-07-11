var React = require('react-native');
var { StyleSheet, Text, View, Image, SwitchIOS} = React;

var EventHandler = React.createClass({

  getInitialState() {
    return {active: false}
  },

  onChangeSwitch(value) {
    this.setState({active: value})
  },

  render: function() {
    var label = this.state.active ? "Active" : "Inactive";

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <SwitchIOS
          onValueChange={this.onChangeSwitch}
          style={styles.switch}
          value={this.state.active} />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: "column"
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10
  },
  switch: {

  }
});

module.exports = EventHandler;