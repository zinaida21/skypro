'use strict';
/*const product = 'sofa';
const count = 1000;
const info = product + ', ' + 'цена ' + count + ' рублей';
alert(info);*/

let getRandomFromRange = (min, max) => {
  if (min >= max) {
    return console.log ('Error, min не может быть больше или равно max')
  } else {
    return Math.random() * (max - min) + min;
  }
}
// eslint-disable-next-line
console.log (parseInt(getRandomFromRange(1, 100)));


