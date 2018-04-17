import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

import registerServiceWorker from './registerServiceWorker';

const API_KEY = "AIzaSyBsmPGdGn7S4o_8bUEic59Js4A9BfXua9g";



class Sam extends Component{

  constructor(props){
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'bird'}, (videos) => {
      this.setState({videos});
    })

  }

  render(){
    return (<div>
      <SearchBar />
      <VideoList videos={this.state.videos}/>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Sam/>, document.getElementById('list'));
registerServiceWorker();
