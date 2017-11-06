import React, { Component } from 'react';
import './App.css';
import ImgSlides from './component/ImgSlides'
import {getImageUrl} from './util';
var imageDatas = require('./data/imageDatas.json');
imageDatas = getImageUrl(imageDatas);

class App extends Component {
  render() {
    return <ImgSlides imageDatas={imageDatas}/>
  }
}

export default App;
