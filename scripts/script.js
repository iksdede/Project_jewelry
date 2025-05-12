'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

const headerMenu = document.querySelector('.header__nav');
if (headerMenu) {
  const headerList = headerMenu.querySelector('.header__list');
  const menuData = {
    link1:{
      link: 'Catalog.html',
      title: 'Каталог',
    },
    link1:{
      link: 'Action.html',
      title: 'Акции',
    },
    link1:{
      link: '#',
      title: 'Коллекции',
    },
    link1:{
      link: 'Delivery&Payment.html',
      title: 'Доставка и оплата',
    },
    link1:{
      link: 'AboutUs.html',
      title: 'О нас',
    },
  }
  const createLink = (UrlLink, title) =>{
    const link = `
    <li class="header__item"><a class="header__item-link" href="${UrlLink}">${title}</a></li>
    `;
    return link;
  }
  for (const linkItem in menuData) {
    const link = menuData[linkItem];
    const linkIndex = createLink(link.UrlLink, link.title);
    headerList.insertAdjacentHTML('beforeend', linkIndex);
  }
}

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

  document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.header__search-container');

    searchIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      searchContainer.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
      if (!searchContainer.contains(e.target)) {
        searchContainer.classList.remove('active');
      }
    });
    

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchContainer.classList.remove('active');
      }
    });
  });

  const preloader = document.querySelector('.preloader');
  const content = document.querySelector('.content');
  if (preloader && content) {
      setTimeout(() => {
    
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden';
          content.style.opacity = '1';

          preloader.remove();
      }, 3000); 
  }
});

  
  // Обновление активной точки при прокрутке
  

const cardsImages = document.querySelector(".header__nav");
if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".header__list");

    // Пример URL для получения данных с сервера
    const apiUrl = "data.json";

    // Функция для создания карточки
    const createCard = (link,icon,iconAlt,iconWidth,iconHeight,cssclass) => {
        // Шаблонные строки и подстановки
        const image = `
        <li class=".image">
            <img class="${cssclass}" src="${icon}" alt="${iconAlt}" width="${iconWidth}">
        </li>
    `;

        return image;
    };
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Данные
        console.log(typeof (data)); // Тип полученных данных
    
        // for (const item in data) {
        //     const card = data[item];
    
        //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
        //     cardList.insertAdjacentHTML('beforeend', cardElement);
        // }
    
        data.forEach(item => {
            const cardElement = createCard(item.link, item.icon, item.iconAlt, item.iconWidth, item.iconHeight, item.cssclass);
            cardListImages.insertAdjacentHTML('beforeend', cardElement);
        });
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
      
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

