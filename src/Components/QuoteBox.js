import React from 'react';

export const QuoteBox = (props) => {

  const STATIC_TEXT =
    <h1 id="text" style={props.textChange}>
      "{props.res}"
    </h1>;

  const ANIM_TEXT = 
    <h1 id="text-anim" style={props.textChange}>
      "{props.res}"
    </h1>;

  const HIDDEN_AUTHOR =
    <div id="author-hidden">
      - {props.author}
    </div>;

  const ANIM_AUTHOR =
    <div id="author" style={props.textChange}>
      - {props.author}
    </div>;

  const STATIC_BOX1 =
    <div className="box-1" style={props.borderChange}>
    </div>;

  const ANIM_BOX1 =
    <div className="box-1-anim" style={props.borderChange}>
    </div>;

  const STATIC_BOX2 =
    <div className="box-2" style={props.borderChange}>
    </div>;

  const ANIM_BOX2 =
    <div className="box-2-anim" style={props.borderChange}>
    </div>;

  return (
    <div id="quote-box">
      <div id="text-bg">
        <div id="text-container">
          {props.animationStatus === "off" ? STATIC_TEXT : ANIM_TEXT}
          {props.done ? ANIM_AUTHOR : HIDDEN_AUTHOR}
        </div>
        {props.animationStatus === "off" ? STATIC_BOX1 : ANIM_BOX1}
        {props.animationStatus === "off" ? STATIC_BOX2 : ANIM_BOX2}
      </div>
    </div>
  );
}