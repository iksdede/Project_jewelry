'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});


document.querySelectorAll('.header__item-link').forEach(link => {
    // * 1. Начало.
    // * 2. Получаем текст.
    // *    2.1. Добавляем обработчик наведения курсора на текст:
    // *        2.1.1. Да:
    // *            2.1.1.1. Показываем подчеркивание.
    // *            2.1.2. Нет: продолжаем.
    // *        2.2. Добавлем обработчик курсор уходит с текста:
    // *            2.2.1. Да:
    // *                2.2.1.1. Скрываем подчеркивание.
    // *            2.2.2. Нет: продолжаем.
    // * 3. Конец
    link.addEventListener('mouseover', function() {
        this.style.borderBottom = '2px solid #000';
        this.style.paddingBottom = '0px';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.borderBottom = 'none';
        this.style.paddingBottom = '0';
    });
});
  
document.addEventListener('DOMContentLoaded', function() {

    const profileIcon = document.querySelector('.profile-icon');
    const modal = document.getElementById('profileModal');
    const closeBtn = document.querySelector('.close-modal');
    

    profileIcon.addEventListener('click', function() {
      modal.style.display = 'block';
    });
    

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
 
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });
  });

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
 
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = 'К началу';
  scrollButton.style.position = 'fixed';
  scrollButton.style.bottom = '20px';
  scrollButton.style.right = '20px';
  scrollButton.style.padding = '10px 15px';
  scrollButton.style.zIndex = '1000';
  scrollButton.style.cursor = 'pointer';
  scrollButton.style.display = 'none'; 
  
  scrollButton.addEventListener('click', scrollToTop);
  document.body.appendChild(scrollButton);
  

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  const headerMenu = document.querySelector('.header__nav');
if (headerMenu){
    const headerList = headerMenu.querySelector('.header__list');
    const menuData = {
    link1: {
        link: 'Catalog.html',
        title: 'Каталог',
    },
    link2: {
        link: 'Action.html',
        title: 'Акции',
    },
    link3: {
        link: '#',
        title: 'Коллекции',
    },
    link4: {
        link: 'Delivery&Payment.html',
        title: 'Доставка и оплата',
    },
    link5: {
        link: 'AboutUs.html',
        title: 'О нас',
    }
}

const createLink = ( UrLink, title) =>{
    const link = `
    <li class="header__item"<a href="${UrLink}" class="header__item-link">${title}</a></li>
    `;
    return link;
}
for (const linkItem in menuData) {
    const link = menuData[linkItem];
    const linkIndex = createLink(link.UrLink, link.title);
    headerList.insertAdjacentHTML('beforeend', linkIndex);
    }
}