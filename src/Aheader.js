import React from 'react';
import Jojo from './img/jojo.jpg';
import Jojo2 from './img/jojo2.png';


class Aheader extends React.Component {
constructor(props) {
  super(props)

this.state = {
visibility : false
};

  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState (state => ({
    visibility: !state.visibility
  }));
}

  render(){
    if(this.state.visibility){
    return(
      <header className = "AHeader">
      <img src ={Jojo} className = "Ajojo" alt = "jojo" />
      <h1 onClick={this.handleClick} className = "ATitle">JoJo's Bizarre Adventure</h1>
      </header>
    );
  } else {
    return(
      <header className = "AHeader">
      <img src ={Jojo2} className = "Ajojo" alt = "jojo" />
      <h1 onClick={this.handleClick} className = "ATitle">Невероятное приключение ДжоДжо</h1>
      </header>
      )
    }
  }
}
export default Aheader;
