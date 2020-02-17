import React from 'react';
export const TweetQuote = (props) => {
  
    let uri = props.res + " - " + props.author;
    let tweet = encodeURIComponent(uri);
    return (<React.Fragment>
      <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=" + tweet} target="_blank" rel="noopener noreferrer">TWEET QUOTE</a>
    </React.Fragment>);
  
}
