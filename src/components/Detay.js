import React from 'react';
import { Text, View, Image } from 'react-native';

import Button from './Button';

const Detay = (props) => {
  const { containerStyle, subContainerStyle, ImageStyle } = styles;
  return (
    <View style={containerStyle}>
    
      <View style={subContainerStyle}>
        <Text> {props.data.title} </Text>
      </View>

      <View style={subContainerStyle}>
        <Image style={ImageStyle} source={{ uri: props.data.image }} />
      </View>

      <View style={subContainerStyle}>
        <Button onPress={() => console.log('tıklandı')}> SATIN AL! </Button>
      </View>

    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    //shadowOffSet: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10

  },

  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', //Dikey düzlemde en üstte
    flexDirection: 'row', //alt alta sıralanması için
    borderColor: '#ddd',
    position: 'relative'

  },

  ImageStyle: {
    height: 300,
    flex: 1, // içerisinde bulunduğu viewin tamamını kapla

  }

};

export default Detay;