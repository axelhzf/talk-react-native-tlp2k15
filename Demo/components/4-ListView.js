var React = require('react-native');
var {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  } = React;

var ListViewSimpleExample = React.createClass({

  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(TV_SHOWS)
    };
  },

  render: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        />
    );
  },

  _renderRow: function (rowData, sectionID, rowID) {
    return (
      <View>
        <View style={styles.row}>
          <Image style={styles.thumb} source={{uri: rowData.image}}/>
          <Text style={styles.text}>
            { rowData.name}
          </Text>
        </View>
        <View style={styles.separator}/>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
    alignItems: 'center'
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC'
  },
  thumb: {
    width: 64,
    height: 64,
    marginRight: 10
  },
  text: {
    flex: 1,
    fontSize: 16
  }
});

var TV_SHOWS = [
  {
    image: "https://walter.trakt.us/images/shows/000/001/416/posters/thumb/a4f9e25836.jpg",
    name: "House of cards"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/001/390/posters/thumb/e2e8d04f11.jpg",
    name: "Game of Thrones"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/059/660/posters/thumb/9593c6cf4b.jpg",
    name: "Better call Saul"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/001/409/posters/thumb/c336773ac7.jpg",
    name: "The Big Bang Theory"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/001/412/posters/thumb/cd7b6fcd28.jpg",
    name: "Modern Family"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/060/157/posters/thumb/85e44f91a7.jpg",
    name: "Silicon Valley"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/001/412/posters/thumb/cd7b6fcd28.jpg",
    name: "Modern Family"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/019/792/posters/thumb/6311e0343c.jpg",
    name: "Sherlock"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/043/973/posters/thumb/735e733dbc.jpg",
    name: "Vikings"
  },
  {
    image: "https://walter.trakt.us/images/shows/000/034/160/posters/thumb/0fed195982.jpg",
    name: "Shameless"
  }
];

module.exports = ListViewSimpleExample;