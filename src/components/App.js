import React, {Component} from 'react';
import radium, {Style} from 'radium';
import styles from '../../src/styles/App.js';
import siteRules from '../../src/styles/rules.js';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';

const API_KEY = 'AIzaSyDhyNiZ0-9unlg1KWq6tGNjG3yI4QyRJ2k';

@radium
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('bob duggan genius');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div className="container">

        <div style={styles.searchRow} className="row">
          <SearchBar onSearchTermChange={videoSearch}/>
        </div>

        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
        </div>

        {siteRules.map((rules, index) => <Style key={`style-rule-${index}`} rules={rules} />)}
      </div>
    );
  }

}

export default App;
