'use strict';

// Variables
const buttons = document.getElementsByClassName('btn');
let str = document.querySelector('.history');
let result = document.querySelector('.result');
let number;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let el = buttons[i].innerHTML;
    if (Number(el) >= 0) {
      number += Number(el);
      console.log(typeof number);
      str.innerHTML += el;
    }
    if (el === '+') {
      debugger;
      str.innerHTML += el;
      result.innerHTML += number;
      number = 0;
    }
  };
}
// const sum = () =>
//   result.innerHTML +
//TODO Brackets functionality - If before the () there is a number on click close it with ')'.If before the () there is an arithmetic sign on click open a new one with '('.

// When 'C' is clicked history and result are reset
buttons[0].onclick = function () {
  str.innerHTML = '';
  number = '';
  result.innerHTML = '';
};

//TODO When an arithmetic sigh is clicked result is autoupdated

//TODO When '=' is clicked the result is shown
