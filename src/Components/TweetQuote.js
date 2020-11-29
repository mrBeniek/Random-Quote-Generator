import React from 'react';

export const TweetQuote = (props) => {

  let uri = props.res + " - " + props.author;
  let tweet = encodeURIComponent(uri);

  const TWEET_BOX_ON =
    <a 
      id="tweet-quote"
      href={"https://twitter.com/intent/tweet?text=" + tweet}
      target="_blank"
      rel="noopener noreferrer"
    >
      TWEET QUOTE
    </a>
  const TWEET_BOX_OFF =
    <div
      id="tweet-quote"
      style={{
        color: "#E53935",
        cursor: "not-allowed",
        opacity: 0.5
      }}
    >
      TWEET QUOTE
    </div>;

  return (
    <React.Fragment>
      {props.done ? TWEET_BOX_ON : TWEET_BOX_OFF}
    </React.Fragment>
  );
}