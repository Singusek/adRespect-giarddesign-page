/* Macy */
document.addEventListener('DOMContentLoaded', function() {
  const macyInstance = Macy({
    container: '.macy-container',
    trueOrder: true,
    waitForImages: true,
    margin: 4,
    columns: 3,
    breakAt: {
      1000: {
        columns: 2
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const macyContainer = document.querySelector(".macy-container");
  const macyItems = macyContainer.querySelectorAll(".macy-item");
  const buttonPortfolio = document.querySelector("#button-portoflio");
  const portfolioContent = document.querySelector("#portfolio-content");
  const initialItemsToShow = 9; 
  let currentItemsToShow = initialItemsToShow;

  for (let i = initialItemsToShow; i < macyItems.length; i++) {
    macyItems[i].style.display = "none";
  }

  buttonPortfolio.addEventListener("click", function() {
    const mediaQueryMobile = window.matchMedia("(max-width: 650px)");
    for (let i = currentItemsToShow; i < currentItemsToShow + initialItemsToShow; i++) {
      if (macyItems[i]) {
        macyItems[i].style.display = "block";
        portfolioContent.classList.add("remove-before-pseudo");
      }
        if (mediaQueryMobile.matches) {
        macyContainer.style.height = "1650px";
      } else {
        macyContainer.style.height = "3300px";
      }
    }
    currentItemsToShow += initialItemsToShow;

    if (currentItemsToShow >= macyItems.length) {
      buttonPortfolio.style.display = "none";
    
    }
  });
});

function scrollToPortfolio() {
  const portfolioSection = document.getElementById('portfolio');
  portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

/* Search input in Navbar */
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const hiddenInput = document.querySelector('.hidden-input');

    let isInputVisible = false;

    searchButton.addEventListener('click', () => {
        if (isInputVisible) {
            hiddenInput.style.width = '0';
            hiddenInput.style.opacity = '0';
        } else {
            hiddenInput.style.width = '200px'; 
            hiddenInput.style.opacity = '1';
            hiddenInput.focus();
        }

        isInputVisible = !isInputVisible;
    });
});


/* Lightbox gallery */
document.addEventListener("DOMContentLoaded", function () {
  const lightboxItems = document.querySelectorAll(".lightbox-item");
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  let currentIndex = 0;

  lightboxItems.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      currentIndex = index;
      updateLightboxImage();
      lightboxOverlay.style.display = "flex";
    });
  });
  
  lightboxClose.addEventListener("click", function () {
    lightboxOverlay.style.display = "none";
  });

  lightboxImage.addEventListener("click", function (e) {
    const x = e.clientX;
    const width = window.innerWidth;
    if (x < width / 2) {
      navigateLightboxImage(-1);
    } else {
      navigateLightboxImage(1);
    }
  });

  function updateLightboxImage() {
    const imageUrl = lightboxItems[currentIndex].querySelector("img").getAttribute("src");
    lightboxImage.setAttribute("src", imageUrl);
  }

  function navigateLightboxImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = lightboxItems.length - 1;
    } else if (currentIndex >= lightboxItems.length) {
      currentIndex = 0;
    }
    updateLightboxImage();
  }

  document.addEventListener("keydown", function (e) {
    if (lightboxOverlay.style.display === "flex") {
      if (e.key === "ArrowLeft") {
        navigateLightboxImage(-1);
      } else if (e.key === "ArrowRight") {
        navigateLightboxImage(1);
      } else if (e.key === "Escape") {
        lightboxOverlay.style.display = "none";
      }
    }
  });
});

/* Animations */
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card-services");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});