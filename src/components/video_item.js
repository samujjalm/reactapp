import React, {Component} from 'react';

class VideoItem extends Component{
  constructor(props){
    super(props);
    this.state = {video: null};
  }

  render(){
    console.log(this.props.video);
    return <li className="list-group-item">{this.props.video.snippet.description}</li>;
  }
}

export default VideoItem;
