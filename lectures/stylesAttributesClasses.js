//Attributes

const logo = document.querySelector('.nav__logo');

logo.alt = 'Beatiful minimalist logo';
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.src);
logo.getAttribute('src');

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributs
console.log(logo.dataset.versionNumber);

//Classes

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//don't use it
logo.className = 'Jonas';
