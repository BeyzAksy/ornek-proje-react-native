import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Liste extends Component {
  state = { data: [] };
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ data: response.data }));
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  renderData() {
    return this.state.data.map(responseData =>
    <Text> {responseData.title} </Text>
  );
  }
  render() {
    console.log('gelen data:' + this.state);
    return (
      <View style={{ marginTop: 5 }}>
        {this.renderData()}
      </View>
    );
  }
}

export default Liste;
