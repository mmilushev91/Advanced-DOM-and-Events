const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('AddEventListener: Great! You are reading the heading :D');
};
h1.addEventListener('mouseenter', alertH1);
//remove eventlistener after 3 sec
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//old way
// h1.onmouseenter = function (e) {
//   alert('Onmouseenter: Great! You are reading the heading :D');
// };
