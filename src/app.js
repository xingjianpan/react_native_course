import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';

// import firebase from 'firebase';
import AV from 'leancloud-storage';

const LC_APPID = 'YnPbzevdUJ5iIzvnMCXPqgRo-gzGzoHsz';
const LC_APPKEY = 'MMs7kQ18mOLgzCqIuSFKWvD7';

class App extends Component {
  componentWillMount() {
    // firebase.initializeApp({
    //     ''
    //  });
    AV.init({
      appId: LC_APPID,
      appKey: LC_APPKEY,
    });
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <Header headerText={'Albums!!!'} />
        <LoginForm />
        <AlbumList />
      </View>
    );
  }
}

export default App;
