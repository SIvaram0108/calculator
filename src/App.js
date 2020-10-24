import React,{Component} from 'react';
import './component/Button';
import Button from './component/Button';
import "./css/style.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      current :'0',
    }
  }
  reset = () => {
    this.setState({current: '0'});
  }
  backspace = () => {
    if(this.state.current.length===1){
      this.setState({current: '0'});
    }
    else {
    this.setState({current: this.state.current.slice(0,this.state.current.length-1)});
    }
  }
  addToCurrent = (symbol) => {
      if ((this.state.current === "0" && symbol !== ".") || (this.state.toReset)){
        this.setState({current:symbol});}
      else{
        this.setState({current: this.state.current+symbol});}
    }
  calculate = (symbol) => {
      this.setState({current : String(eval(this.state.current))});
    
  }
  render (){
    const buttons = [
      {symbol: 'C',cols:1,wid:50,typ: 'clr',action: this.reset,flt:1},
      {symbol: '/',cols:1,wid:25,typ: 'operator',action: this.addToCurrent,flt:1},
      {symbol: '%',cols:1,wid:25,typ: 'operator',action: this.addToCurrent,flt:0},
      {symbol: '7',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '8',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '9',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '*',cols:1,wid:25,typ: 'operator',action: this.addToCurrent,flt:0},
      {symbol: '4',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '5',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '6',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '-',cols:1,wid:25,typ: 'operator',action: this.addToCurrent,flt:0},
      {symbol: '1',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '2',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '3',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '+',cols:1,wid:25,typ: 'operator',action: this.addToCurrent,flt:0},
      {symbol: '⌫',cols:1,wid:25,typ: 'bck',action: this.backspace,flt:1},
      {symbol: '0',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '.',cols:1,wid:25,typ: 'num',action: this.addToCurrent,flt:1},
      {symbol: '=',cols:1,wid:25,typ: 'operator',action: this.calculate,flt:1}


    ];
  return (
    <div className="App calc-box">
      <h1 className="title">Calculator</h1>
      <input className="result" type="text" value={this.state.current} />
      {buttons.map((btn,i) => {
        return (<Button key={i} symbol={btn.symbol} cols={btn.cols} flt={btn.flt} wid={btn.wid} typ={btn.typ} action={(symbol) => btn.action(symbol)}/>)
      })}
      
    </div>
  );
  }
}

export default App;
