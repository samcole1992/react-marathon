import React, { Component } from 'react';

class Playlist extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <li className={this.props.className} onClick={this.props.handlePlaylistSelect}>
        {this.props.name}
      </li>
    )
  }
};

export default Playlist;
