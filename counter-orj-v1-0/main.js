//const second = 1000;

const state = {
  current : 0,
};

function Increment() {
  state.current++
}

function Reset() {
  state.current = 0;
  //console.log('HALLELUJAH');
}

function Render() {
  const screen = document.getElementById('screen');
  screen.innerText = state.current;
}
document.getElementById('inc-button').addEventListener(
  'click',
  function () {
    Increment();
    Render();
  }
);

document.getElementById('reset-button').addEventListener(
  'click',
  function () {
    Reset();
    Render();
  }
);


// var elm = document.querySelector('#kutu')
//
// 
// var buton = document.createElement('button')
//
//
// buton.innerHTML = 'TIKLA'
//
// document.body.appendChild(buton);
//
// function degistir() {
//   if (kutu.innerText == 'selma') {
//
//   kutu.innerText = 'onur'
// } else {
//   kutu.innerText = 'selma'
// }
// }
//
// buton.addEventListener('click', degistir)
