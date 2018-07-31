var menuBtn = document.getElementById('menu-btn');
var contactBtn = document.getElementById('contact-btn');
var closeMenuBtn = document.getElementById('close-menu-btn');
var closeContactBtn = document.getElementById('close-contact-btn');
var menu = document.getElementById('menu');
var contact = document.getElementById('contact');


menuBtn.addEventListener('click', function() {
  menu.style.display = 'block';
}, false);

contactBtn.addEventListener('click', function() {
  contact.style.display = 'block';
}, false);

/* TODO: refactor this close modal code */
closeMenuBtn.addEventListener('click', closeModal, false);
closeContactBtn.addEventListener('click', closeModal, false);

function closeModal() {
  menu.style.display = 'none';
  contact.style.display = 'none';
}
