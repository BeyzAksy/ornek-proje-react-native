import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Detay from './Detay';


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
    return this.state.data.map((responseData, Id) =>   //gelen datalarda uniq bir key olmasını istiyotdu
    <Detay key={Id} data={responseData} />   //bunu data içinden de belirleyebiliriz kendimizde bu şekilde id atayabiliriz
  );
  }

  render() {
    console.log('gelen data:' + this.state);
    return (
      <ScrollView style={{ marginTop: 5 }}>
        {this.renderData()}
      </ScrollView>
    );
  }
}

export default Liste;
