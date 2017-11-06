import React, { Component } from 'react';
import '../style/component/controllerUnit.css';
class ControllerUnit extends Component {
  constructor(props) {
    super(props);
    this.changeCurrent = this.changeCurrent.bind(this);
  }
  changeCurrent(index){
    return function(){
      this.props.changeCurrent(index);
    }.bind(this);
  }
  render() {
    let arr = [];
    for(let i = 0; i < this.props.count; i++){
      let btnContent = null;
      if(i === this.props.current){
        btnContent =
          <span key={i.toString()} style={{background: 'rgba(255,255,255,0.5)'}} onMouseOver={this.changeCurrent(i)}></span>
      } else{
        btnContent =
          <span key={i.toString()} onMouseOver={this.changeCurrent(i)}></span>
      }
        arr.push(btnContent);
    }
    return(
      <nav className="btns">{arr}</nav>
    );
  }
}
export default ControllerUnit;
