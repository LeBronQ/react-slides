export function getImageUrl(imageDatasArr){
  for(var i = 0; i < imageDatasArr.length; i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('./images/' + singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
}
