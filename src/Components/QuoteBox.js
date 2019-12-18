import React from 'react';
export class QuoteBox extends React.Component {
  render() {
    const STATIC_TEXT = <h1 id="text" style={this.props.textChange}>"{this.props.res}"</h1>;
    const ANIM_TEXT = <h1 id="text-anim" style={this.props.textChange}>"{this.props.res}"</h1>;
    const HIDDEN_AUTHOR = <div id="author-hidden">- {this.props.author}</div>;
    const ANIM_AUTHOR = <div id="author" style={this.props.textChange}>
      - {this.props.author}
    </div>;
    const STATIC_BOX1 = <div className="box-1" style={this.props.borderChange}></div>;
    const ANIM_BOX1 = <div className="box-1-anim" style={this.props.borderChange}></div>;
    const STATIC_BOX2 = <div className="box-2" style={this.props.borderChange}></div>;
    const ANIM_BOX2 = <div className="box-2-anim" style={this.props.borderChange}></div>;
    return (<div id="quote-box">

      <div id="text-bg">
        <div id="text-container">
          {this.props.animationStatus == "off" ? STATIC_TEXT : ANIM_TEXT}
          {this.props.done ? ANIM_AUTHOR : HIDDEN_AUTHOR}
        </div>
        {this.props.animationStatus == "off" ? STATIC_BOX1 : ANIM_BOX1}
        {this.props.animationStatus == "off" ? STATIC_BOX2 : ANIM_BOX2}
      </div>


    </div>);
  }
}
