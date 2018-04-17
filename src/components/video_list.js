import React, {Component} from 'react';
import VideoItem from '../components/video_item';

class VideoList extends Component{
  constructor(props){
    super(props);
    this.state = {videos: []};
  }

  render(){
    return <ul className="list-group">{this.props.videos.map((video) => <VideoItem key={video.etag} video={video} />)}</ul>;
  }
}

export default VideoList;
