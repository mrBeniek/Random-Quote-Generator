import React from 'react';
export class TweetQuote extends React.Component {
  render() {
    let uri = this.props.res + " - " + this.props.author;
    let tweet = encodeURIComponent(uri);
    return (<React.Fragment>
      <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=" + tweet} target="_blank">TWEET QUOTE</a>
    </React.Fragment>);
  }
}
