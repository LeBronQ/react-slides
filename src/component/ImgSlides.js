import React, { Component } from 'react';
import ImgFigure from './ImgFigure';
import ControllerUnit from './ControllerUnit';
import '../style/component/imgSlides.css';
class ImgSlides extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 0, // 当前图片
      isHover: false, // 鼠标是否悬停到组件上
      imgsArrangeArr: [
        // {
        //   display: 'none', // 是否显示
        //   opacity: '0', // 透明度
        //   isCurrent: false, // 是否为当前照片
        // }
      ]
    }
    this.hoverHandle = this.hoverHandle.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
    this.setImgArrange = this.setImgArrange.bind(this);
    this.changeCurrent = this.changeCurrent.bind(this);
  }
  componentDidMount() {
    let imgsArrangeArr = this.setImgArrange(0);
    this.setState(function(prev){
      return {imgsArrangeArr: imgsArrangeArr}
    })
    this.setCurrent();
  }
  setImgArrange(current){
    let imgsArrangeArr = [];
    for (var i = 0; i < this.props.imageDatas.length; i++) {
      if(i === current){
        imgsArrangeArr[i] = {
          visibility: 'visible',
          opacity: '100'
        }
      } else{
        imgsArrangeArr[i] = {visibility:'hidden', opacity: '0'}
      }
    }
    return imgsArrangeArr;
  }
  setCurrent(){
    let _this = this;
    setInterval(function(){
      if(!_this.state.isHover){

        _this.setState(function(prev){
          let current = (prev.current + 1) % this.props.imageDatas.length;
          let imgsArrangeArr = this.setImgArrange(current);
          return {current: current,
            imgsArrangeArr: imgsArrangeArr};
        });
      } else{
        return null;
      }
    },5000);
  }
  changeCurrent(index){
    this.setState(function(prev){
      let imgsArrangeArr = this.setImgArrange(index);
      return {current: index,
      imgsArrangeArr: imgsArrangeArr}
    });
  }
  hoverHandle(){
    this.setState(function(prev){
      return {
        isHover: !prev.isHover,
      }
    })
  }
  render() {

    return (
      <div className="slides" onMouseOver={this.hoverHandle} onMouseOut={this.hoverHandle}>
        <ControllerUnit current={this.state.current} changeCurrent={this.changeCurrent} setCurrent={this.setCurrent} count={this.props.imageDatas.length} />
        <ImgFigure data = {this.props.imageDatas} current={this.state.current} arrange={this.state.imgsArrangeArr}/>
      </div>
    );
  }

}
export default ImgSlides;
