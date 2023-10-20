let owlCarousel = document.querySelector(".slider_js")
if (owlCarousel) {
  jQuery(document).ready(function () {
    var $ = jQuery;
    $('.slider_js').owlCarousel({
      items: 2,
      loop: true,
      nav: true,
      dots: false,
      margin: 10,
      responsive: {
        0: {
          items: 1
        },
        800: {
          items: 2
        }
      }

    });
  });
}
let slick = document.querySelector(".related_products_js")
if (slick) {
  $('.related_products_js').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
}
let dropdownMenus = document.querySelectorAll(".list-unstyled.submenu");
let megaDrpdwn = document.querySelector(".megaDropMenu");

function updateDropdownMenus() {
  let maxWidth = window.matchMedia("(max-width: 767px)").matches;

  if (dropdownMenus) dropdownMenus.forEach((ul) => {
    if (maxWidth) {
      ul.classList.add("dropdown-menu");
      megaDrpdwn.setAttribute("data-toggle", "dropdown")
    } else {
      if (ul) ul.classList.remove("dropdown-menu");
      megaDrpdwn.removeAttribute("data-toggle")
    }
  });
}

updateDropdownMenus();

window.addEventListener("resize", updateDropdownMenus);

const form = document.getElementById('angelContactForm');

if (form) {
  document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (event) {
      let isValid = true;
      // Name validation
      const nameField = document.querySelector('input[name="contact-form-name"]');
      const nameError = document.getElementById('name-error');
      if (!nameField.value.trim()) {
        nameError.style.display = 'block';
        isValid = false;
      } else {
        nameError.style.display = 'none';
      }

      // Phone validation
      const phoneField = document.querySelector('input[name="contact-form-phone"]');
      const phoneError = document.getElementById('phone-error');
      if (!phoneField.value.trim()) {
        phoneError.style.display = 'block';
        isValid = false;
      } else {
        phoneError.style.display = 'none';
      }

      // Email validation
      const emailField = document.querySelector('input[name="contact-form-email"]');
      const emailError = document.getElementById('email-error');
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailField.value.trim() || !emailPattern.test(emailField.value)) {
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }

      // Message validation
      const messageField = document.querySelector('textarea[name="contact-form-message"]');
      const messageError = document.getElementById('message-error');
      if (!messageField.value.trim()) {
        messageError.style.display = 'block';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }

      if (!isValid) {
        event.preventDefault();
      }
      console.log("hi")

    })
  })
};
let phoneInput = document.getElementById('phone-input');

if (phoneInput) phoneInput.addEventListener('input', function (e) {
  let cleanedValue = e.target.value.replace(/\D/g, '');
  e.target.value = cleanedValue;


});
const numericInput = document.querySelector('.numeric-input');
if (numericInput) {
  numericInput.addEventListener('input', function () {
    let newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
    this.value = newValue;
  })

}

if (document.querySelector(".swiper_thumb") && document.querySelector(".swiper_large_preview")) {
  var swiper = new Swiper(".swiper_thumb", {
    spaceBetween: 10,
    slidesPerView: 5,
    speed: 300,
    loop: false,
    freeMode: true,
    watchSlidesProgress: true,
    ClickAble: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper2 = new Swiper(".swiper_large_preview", {
    spaceBetween: 10,
    slidesPerView: 1,
    speed: 0,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

}

let decreaseBtns = document.querySelectorAll(".product-count .decrease")
let increaseBtns = document.querySelectorAll(".product-count .increase")

decreaseBtns.forEach((dec) => {
  dec.onclick = (e) => {
    e.preventDefault();
    if (dec.nextElementSibling.innerHTML > 1) {
      dec.nextElementSibling.innerHTML--;

    }
  }
})
increaseBtns.forEach((inc) => {
  inc.onclick = (e) => {
    e.preventDefault();
    inc.previousElementSibling.innerHTML++;
  }

})
