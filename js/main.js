const handleDomContentLoaded = () => {
  const body = document.body;
  const navBtn = document.querySelector('.header .nav-btn');
  const header = document.querySelector('.header');
  const overlay = document.querySelector('.header .overlay');

  function handleClickButton() {
    if (header.classList.contains('is-active')) {
      closeNavigation();
    } else {
      openNavigation();
    }
  }
  function closeNavigation() {
    body.classList.remove('disable-scroll');
    header.classList.remove('is-active');
  }
  function openNavigation() {
    body.classList.add('disable-scroll');
    header.classList.add('is-active');
  }

  navBtn.addEventListener('click', handleClickButton);
  overlay.addEventListener('click', closeNavigation);
};

document.addEventListener('DOMContentLoaded', handleDomContentLoaded);
