import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import AlbumList from './components/AlbumList';

class App extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Header headerText={'Albums!!!'} />
        <AlbumList />
      </View>
    );
  }
}

export default App;
