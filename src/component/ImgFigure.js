import React, { Component } from 'react';
import '../style/component/imgFigure.css';
class ImgFigure extends Component {
  componentDidMount(){

  }
  render() {
    let arr = [];
    let img = this.props.data;
    for(let i = 0; i < img.length; i++){
      let imgContent =
      <img key={i.toString()} style={this.props.arrange[i]} src={img[i].imageURL} alt={img[i].desc}/>
      arr.push(imgContent);
    }
    return (
      <div className="imgs">{arr}</div>
    );
  }
}

export default ImgFigure;
