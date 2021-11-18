const menu = document.querySelector('#mobile');
const menuLinks = document.querySelector('.menu');
const navLogo = document.querySelector('.logo');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.bottomline');
  const homeMenu = document.querySelector('#home-page');
  const eventMenu = document.querySelector('#event-page');
  const serviceMenu = document.querySelector('#service-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('bottomline');
    eventMenu.classList.remove('bottomline');
    contactMenu.classList.remove('bottomline');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    eventMenu.classList.add('bottomline');
    homeMenu.classList.remove('bottomline');
    serviceMenu.classList.remove('bottomline');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1900) {
    serviceMenu.classList.add('bottomline');
    eventMenu.classList.remove('bottomline');
    contactMenu.classList.remove('bottomline');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 3000) {
    contactMenu.classList.add('bottomline');
    serviceMenu.classList.remove('bottomline');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('bottomline');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
