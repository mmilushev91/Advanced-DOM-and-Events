//Selecting, creating, deleting elements

//1. Selecting elements
//selecting the whole htm of the page
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//selecting first element with that class
const header = document.querySelector('.header');
//selecting all elements with the class and creates a node list
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//selecting elements with id - without # sign
document.getElementById('section__1');

//get all elements of type button and returns
// html collections, which is updated in real time.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//get all elements with class name wihout . selector and returns
//live html collection
console.log(document.getElementsByClassName('btn'));

//2. Create and insert elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We used cookies for improved functionality and analytics';

message.innerHTML =
  'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//add message as the first child of the header element
// header.prepend(message);
//add message as the last child of the header element
header.append(message);

//in this case the message will be visible only as the last child since message is an unique dom element
//and cannot be at two places the same time
//clonning element if we wanted on several positions
// header.prepend(message.cloneNode(true))

//insert element before and after header element
// header.before(message);
// header.after(message);

//3. Deleting elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
//old way of removing elements
// message.parentElement.replaceChild(message);
