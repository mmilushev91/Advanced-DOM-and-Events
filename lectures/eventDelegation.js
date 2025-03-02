
//adding event listener to all elements - Not optimized
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behaviour: 'smooth' });
//   });
// });

//Event delegation
//1.Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy

  if (e.target.classList.contains('nav__link')) {
    console.log('Link');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behaviour: 'smooth' });
  }
});
