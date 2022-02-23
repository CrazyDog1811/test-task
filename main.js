const switcher = document.querySelector('.switcher');
const slider = document.querySelector('.slider');
const slides = switcher.querySelectorAll('.scroll');
const order = document.querySelector('.order');
const popUpForm = document.querySelector('.form-interface');

const burger = document.querySelector('.hamburger');
const adaptMenu = document.querySelector('.header-nav');

console.log(burger);

const moveSlider = (ev) => {
   slides.forEach(el => el.classList.remove('checked'));
   if(ev.target.classList.contains('l')) {
      slider.classList.remove('right');
      ev.target.classList.add('checked');
   }
   if(ev.target.classList.contains('r')) {
      slider.classList.add('right');
      ev.target.classList.add('checked');
   }

}

const showPopUp = () => {
   popUpForm.style.display = 'grid';
}

const removePopUp = (ev) => {
   if(ev.target.classList.contains('cancel')) {
       popUpForm.style.display = 'none';
   }
   if(ev.target.classList.contains('send')
   && (name2.value && phone2.value)) {
     const message = `<p style=background-color:white color:red>Форма отправлена</p>`;
     popUpForm.insertAdjacentHTML('beforeEnd', message);
     setTimeout(() => {
         popUpForm.lastChild.remove();
        popUpForm.style.display = 'none';
     }, 3000)
   }
}

const closeMenu = (ev) => {
   if (ev.target.classList.contains('nav-link')) {
       burger.classList.remove('is-active');
       adaptMenu.classList.remove('open');
   }
}

const toggleBurger = () => {
   burger.classList.toggle('is-active');
   adaptMenu.classList.toggle('open');
}


switcher.addEventListener('click', moveSlider);
order.addEventListener('click', showPopUp);
popUpForm.addEventListener('click', removePopUp);
adaptMenu.addEventListener('click', closeMenu);
burger.addEventListener('click', toggleBurger)