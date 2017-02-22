import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import AV from 'leancloud-storage';
import { Header, Button, Spinner } from './components/common';
import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import LibraryList from './components/LibraryList';


const LC_APPID = 'YnPbzevdUJ5iIzvnMCXPqgRo-gzGzoHsz';
const LC_APPKEY = 'MMs7kQ18mOLgzCqIuSFKWvD7';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // no idea whether you are logged in or not
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB346_uWghszEeQuFDIGaHfoweJHJ2wHdo',
      authDomain: 'reactnative-311d4.firebaseapp.com',
      databaseURL: 'https://reactnative-311d4.firebaseio.com',
      storageBucket: 'reactnative-311d4.appspot.com',
      messagingSenderId: '973359486430',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
    // AV.init({
    //   appId: LC_APPID,
    //   appKey: LC_APPKEY,
    // });

  renderContent() {
    switch (this.state.logged) {
      case true:
        return (
          <Button onPress={() => { firebase.auth().SignOut(); }}>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText={'Tech Stack!'} />
          {this.renderContent()}

          <LibraryList />
          <AlbumList />
        </View>
      </Provider>
    );
  }
}

export default App;
