import React, { Component } from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let playlists = this.props.data.playlists.map(playlist => {
      let className;

      if (playlist.id === this.props.selectedPlaylistId) {
        className = 'selected';
      }
      let handlePlaylistSelect = () => {
        this.props.handlePlaylistSelect(playlist.id);
        };
      return(
        <Playlist
          id = {playlist.id}
          name = {playlist.name}
          songs = {playlist.songs}
          key = {playlist.id}
          className = {className}
          handlePlaylistSelect = {handlePlaylistSelect}

        />
      )
    })
    return(
      <ul>{playlists}</ul>
    )
  }
}

export default PlaylistCollection;
