const switcher = document.querySelector('.switcher');
const slider = document.querySelector('.slider');
const slides = switcher.querySelectorAll('.scroll');
const order = document.querySelector('.order');
const popUpForm = document.querySelector('.form-interface');
console.log(name2.value);

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



switcher.addEventListener('click', moveSlider)
order.addEventListener('click', showPopUp);
popUpForm.addEventListener('click', removePopUp)