const play = document.querySelector('.about__play'),
   video = document.querySelector('.about__video video'),
   burger = document.querySelector('.burger-menu'),
   menu = document.querySelector('.menu');

play.addEventListener('click', () => {
   video.play();
   video.setAttribute('controls', 'controls');
   play.classList.add('about__play--hidden');
});

burger.onclick = (e) => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
};
