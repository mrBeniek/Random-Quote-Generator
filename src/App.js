import React from 'react';
import './App.scss';
import { TweetQuote } from './Components/TweetQuote';
import { NewQuote } from './Components/NewQuote';
import { QuoteBox } from './Components/QuoteBox';
    
const BG_COLORS = [ "#F8BBD0", "#81C784", "#C5CAE9", "#B2DFDB", "#FFCCBC", "#BCAAA4" ]
    
let prev = "";
let quote = "";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: null,
      res: "",
      author: "",
      animationStatus: "off",
      done: true,
      quotesData: null,
      quotesLength: "",
      color: BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => {return response.json()})
      .then(data => {
      let rand = Math.floor(Math.random() * data.quotes.length)
      this.setState({
        quotesData: data,
        quotesLength: data.quotes.length,
        res: data.quotes[rand].quote,
        author: data.quotes[rand].author
      })
      if (this.state.quotesData == null) {console.log("Error: Failed to load quotes")}
      else {console.log("Quotes Loaded")}     
    })   
  }

  handleClick() {
    
    if (this.state.done === false || this.state.animationStatus === "on") {return}
    
    this.setState({
      animationStatus: "on"
    })
    
    setTimeout ( () => {
      this.setState({
        color: BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
      })
    }, 1500)
    
    setTimeout ( () => {
      this.setState({
        animationStatus: "off"
      })
    }, 6000)
    
    setTimeout ( () => {
      this.setState({
        done: false
      })
    }, 1500)
    
    setTimeout( () => {
      this.setState(state => ({
        randomIndex: Math.floor(Math.random() * state.quotesLength)
      }))
    
      quote = this.state.quotesData.quotes[this.state.randomIndex].quote;
      let shuffleChance = 0;
      let shuffleSpeed = 100;
    
      prev = quote
        .split("")
        .map( val => {
          if (val.charCodeAt(0) < 97 || val.charCodeAt(0) > 122 ) {return val};
          return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))
        }).join("");
    
    
      let shuffleCallback = () => {
        if (prev === quote) {
          this.setState({
            done: true,
            author: this.state.quotesData.quotes[this.state.randomIndex].author        
          })
          clearInterval(shuffle);
          return
        }
        
        prev = prev
          .split("")
          .map( (val, index) => { 
            if (val === quote[index]) {return val};
            let newLetter = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97));
            if (shuffleChance > (Math.floor(Math.random() * (100 - 0 + 1) + 0))) {
              return quote[index]
            };
            return newLetter
          })
          .join("");
                
        this.setState({
          res: prev
        });
        
        shuffleChance += 0.9;
        shuffleSpeed += 10;
        
        clearInterval(shuffle);
        setTimeout(shuffleCallback, shuffleSpeed)
      };
          
      let shuffle = setInterval(shuffleCallback, shuffleSpeed)
    }, 1500)
  }
  
  render() { 
    let colorChange = {backgroundColor: this.state.color};
    let borderChange = {borderColor: this.state.color};
    let textChange = {color: this.state.color};

    return (
      <div>
        <div id="main" style={colorChange}>
          <div id="main-container">
            <QuoteBox animationStatus={this.state.animationStatus} res={this.state.res} author={this.state.author} done={this.state.done} textChange={textChange} borderChange={borderChange} />
            <div class="btn-container">
              <NewQuote handleClick={this.handleClick} done={this.state.done} />   
              <TweetQuote res={this.state.res} author={this.state.author} done={this.state.done} />   
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;