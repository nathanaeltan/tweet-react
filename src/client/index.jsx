import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from 'tweets.js'
import Tweet from 'tweet.jsx'






class App extends React.Component {
  render() {
    let list = this.props.feed.map(item => {
      return <Tweet item={item}></Tweet>
    })
    return (
      <div >
       
        tweets
        {list}
      </div>
    );
  }
}

const element = document.getElementById('app');
const posts = Tweets
ReactDOM.render(<App feed={posts} />, element );//

