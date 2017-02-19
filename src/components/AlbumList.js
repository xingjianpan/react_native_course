import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const ROOT = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {

  state = { albums: []};

  componentWillMount() {
    axios.get(ROOT)
      .then(response => {
        // console.log(response);
        this.setState( {
          albums: response.data,
        })
      })
  }

  renderAlbums(albums) {
    // console.log(albums)


    return (
       albums.map( (album)=>{
          return <Text> {album.title} </Text>
        })
      )
  }
  render() {

    return (
      <View>
         {this.renderAlbums(this.state.albums)}
      </View>
    );
  }
}

export default AlbumList;
