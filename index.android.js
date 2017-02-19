// index.android.js --place code in here for Android


// Import a libary to help create a component
import React from 'react';
import Header from './src/components/header';
import { AppRegistry } from 'react-native';

// Create a component
const App = () => {
  return (
    <Header headerName={'Albums!'} />
  );
};

// Render it to the device
AppRegistry.registerComponent('AwesomeProject', () => App);

