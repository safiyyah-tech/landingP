/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll('section'));
const navUl = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/




// Add class 'active' to section when near top of viewport

    






// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Add class 'active' to section when near top of viewport

// Set sections as active

const ceateMenu = () => {
  const nav = sections.map((section) =>
    `
    <li><a href="#" data-section="${section.id}" class="menu__link">${section.getAttribute('data-nav')}</a></li>
    `
  ).join('');
  navUl.innerHTML = nav;
};

ceateMenu();

const setActiveClass = () => {
  sections.forEach((section) => {
    const position = section.getBoundingClientRect();
    if (position.y <= 150 && position.y >= -100) {
      section.classList.add('your-active-class');
    }
    else {
      section.classList.remove('your-active-class');
    }
  });
}

document.addEventListener('scroll', setActiveClass);

const links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = '#' + link.getAttribute('data-section');
    const targetSection = document.querySelector(sectionId);
    window.scrollTo(0, window.scrollY + targetSection.getBoundingClientRect().top);
  })
})