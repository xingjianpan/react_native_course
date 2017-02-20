// index.android.js --place code in here for Android


// Import a libary to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a component

// GOTCHA: use {flex:1} to enable scrolling
const App = () => {
  return (
    <View style={{ flex:1 }}>
      <Header headerText={'Albums!!!'} />
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('AwesomeProject', () => App);

