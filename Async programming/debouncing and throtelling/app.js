// Throttling is about firing event after certain time

// Debouncing will execute after every certain time provided in between there aws no event call
let nCnt = 0;
let tCnt = 0;
let dCnt = 0;

let fireThrottel = true;

// let nCnt = document.getElementById('')
// let  = document.getElementById('')
// let  = document.getElementById('')
function showCount() {
  normalCount();
  throttelCount();
  debounceCount();
}

function normalCount() {
  nCnt++;
  document.getElementById('nCnt').innerHTML = 'Normal count=' + nCnt;
}
let tRef;
// throttel will execute code after certain duration
function throttelCount() {
  if (fireThrottel) {
    tCnt++;
    document.getElementById('tCnt').innerHTML = 'Throttel count=' + tCnt;
    fireThrottel = false;
  } else {
    clearTimeout(tRef);
    tRef = setTimeout(() => {
      console.log('settimeout');
      throttelCount();
      fireThrottel = true;
    }, 1000);
  }
}
let timeCountRef;
function debounceCount() {
  clearTimeout(timeCountRef);
  timeCountRef = setTimeout(() => {
    dCnt++;
    document.getElementById('dCnt').innerHTML = 'Debounce count=' + dCnt;
  }, 1000);
  //   if (timeCountRef) {
  //     clearTimeout(timeCountRef);
  //   } else {
  //     timeCountRef = setTimeout(() => {
  //       dCnt++;
  //       document.getElementById("dCnt").innerHTML = "Debounce count=" + dCnt;
  //     }, 1000);
  //   }
}
// let ref;
// for (let i = 0; i < 10; i++) {
//   console.log('ref', ref);
//   ref = setTimeout(() => {
//     console.log('settimeout');
//   }, 1000);
// }
