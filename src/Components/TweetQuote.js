import React from 'react';
export const TweetQuote = (res, author) => {
  
    let uri = res + " - " + author;
    let tweet = encodeURIComponent(uri);
    return (<React.Fragment>
      <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=" + tweet} target="_blank">TWEET QUOTE</a>
    </React.Fragment>);
  
}
