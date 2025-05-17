/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', ()=> {
    //alert('Hi');
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img');
  const smallImg = document.querySelectorAll('.details__small-img');

  // if (!mainImg || smallImg.length === 0) {
  //   console.error("Image elements not found!");
  //   return;
  // }

  smallImg.forEach((img) => {
    img.addEventListener('click', function() {
      mainImg.src = this.src;
    });
  });
}
document.addEventListener('DOMContentLoaded', imgGallery);



/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween : 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
    },
  });

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
  spaceBetween : 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 44,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target); // Use querySelector instead of querySelectorAll

    if (!target) {
      console.error(`No element found for selector: ${tab.dataset.target}`);
      return;
    }

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    target.classList.add('active-tab'); // Ensure target is not null before using add()

    tabs.forEach((t) => {
      t.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const zoomContainer = document.querySelector('.zoom-container');
  const zoomImage = document.querySelector('.zoom-image');
  const zoomLens = document.querySelector('.zoom-lens');

  if (zoomContainer && zoomImage && zoomLens) {
    zoomContainer.addEventListener('mousemove', function (e) {
      const { left, top } = zoomContainer.getBoundingClientRect();
      const x = e.pageX - left;
      const y = e.pageY - top;

      zoomLens.style.left = `${x - zoomLens.offsetWidth / 2}px`;
      zoomLens.style.top = `${y - zoomLens.offsetHeight / 2}px`;

      zoomLens.style.display = "block";
      zoomLens.style.backgroundImage = `url(${zoomImage.src})`;
      zoomLens.style.backgroundPosition = `-${x * 2 - zoomLens.offsetWidth}px -${y * 2 - zoomLens.offsetHeight}px`;
    });

    zoomContainer.addEventListener('mouseleave', function () {
      zoomLens.style.display = "none";
    });
  } else {
    console.warn('Zoom elements not found in the DOM.');
  }
});



// Function to update the countdown timer
function updateCountdown(endTime, elementIds) {
  const countdownElement = document.getElementById(elementIds.countdown);
  const daysElement = document.getElementById(elementIds.days);
  const hoursElement = document.getElementById(elementIds.hours);
  const minutesElement = document.getElementById(elementIds.minutes);
  const secondsElement = document.getElementById(elementIds.seconds);

  function calculateTimeLeft() {
    const currentTime = new Date().getTime();
    const remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      // Display 00:00:00:00 when time runs out
      daysElement.innerText = '00';
      hoursElement.innerText = '00';
      minutesElement.innerText = '00';
      secondsElement.innerText = '00';
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the HTML elements
    daysElement.innerText = days < 10 ? '0' + days : days;
    hoursElement.innerText = hours < 10 ? '0' + hours : hours;
    minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  calculateTimeLeft(); // Initial update
  const timerInterval = setInterval(calculateTimeLeft, 1000); // Update every second
}

// Example of setting the countdown for the first deal (48 hours)
const endTime1 = new Date().getTime() + 48 * 60 * 60 * 1000; // 48 hours from now
updateCountdown(endTime1, {
  countdown: 'countdown',
  days: 'days',
  hours: 'hours',
  minutes: 'minutes',
  seconds: 'seconds',
});

// Example of setting the countdown for the second deal (72 hours)
const endTime2 = new Date().getTime() + 72 * 60 * 60 * 1000; // 72 hours from now
updateCountdown(endTime2, {
  countdown: 'countdown2',
  days: 'days2',
  hours: 'hours2',
  minutes: 'minutes2',
  seconds: 'seconds2',
});



// Open or close dropdown
function toggleDropdown(event) {
  event.stopPropagation(); // Prevent event from bubbling to document
  const list = document.getElementById("categoryList");
  const arrow = document.getElementById("dropdownArrow");
  list.classList.toggle("show");
  arrow.classList.toggle("rotate");
}

// Select a category
function selectCategory(element) {
  const selectedText = element.querySelector("span").innerText;
  document.getElementById("selectedText").innerText = selectedText;

  // Close dropdown
  document.getElementById("categoryList").classList.remove("show");
  document.getElementById("dropdownArrow").classList.remove("rotate");
}

// Close dropdown if clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown-container");
  const list = document.getElementById("categoryList");
  const arrow = document.getElementById("dropdownArrow");

  if (!dropdown.contains(event.target)) {
    list.classList.remove("show");
    arrow.classList.remove("rotate");
  }
});





