import logo from './logo.svg';
import './App.css';

import data from "./data.json";
import Tweets from './tweets';
import { useEffect, useState } from 'react';
import TweetsStats from './tweet-stats';

function App() {

  let [tweets, setTweets] = useState(data.tweets);
  const numberOfLikes = tweets.reduce((total, tweet)=>total += tweet.likes, 0);

  function handleLike(id, newLikes){

    setTweets( (prevTweets)=>{
      const ts = [...prevTweets];
      const indexOfTweet = ts.findIndex(t=>t.id === id);
      ts[indexOfTweet].likes = newLikes;
      return ts;
    } );
  }

  return (
    <div >
      <header>
        <h3>Social</h3>
      </header>


      <main>

        <Tweets tweets={tweets} onLike={handleLike} />

        <TweetsStats {...{numberOfLikes}}   />

      </main>

    </div>
  );
}

export default App;
