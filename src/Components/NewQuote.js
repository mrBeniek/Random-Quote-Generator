import React from 'react';
export const NewQuote = (props, done) => {
  
    const QUOTE_BOX_ON = <div id="new-quote" onClick={props.handleClick}>NEW QUOTE</div>;
    const QUOTE_BOX_OFF = <div id="new-quote" style={{ color: "#E53935", cursor: "not-allowed", opacity: 0.5 }}>NEW QUOTE</div>;
    return (<React.Fragment>
      {done ? QUOTE_BOX_ON : QUOTE_BOX_OFF}
    </React.Fragment>);
  
}
