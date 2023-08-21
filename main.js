

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

document.addEventListener('DOMContentLoaded', function() {
  const macyInstance = Macy.init({
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
  // todo
  BiggerPictures({
    selector: '.macy-item a',
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const macyContainer = document.querySelector(".macy-container");
  const macyItems = macyContainer.querySelectorAll(".macy-item");
  const buttonPortfolio = document.querySelector("#button-portoflio");
  const initialItemsToShow = 9; 
  let currentItemsToShow = initialItemsToShow;

  for (let i = initialItemsToShow; i < macyItems.length; i++) {
    macyItems[i].style.display = "none";
  }

  buttonPortfolio.addEventListener("click", function() {
    for (let i = currentItemsToShow; i < currentItemsToShow + initialItemsToShow; i++) {
      if (macyItems[i]) {
        macyItems[i].style.display = "block";
      }
    }
    currentItemsToShow += initialItemsToShow;

    if (currentItemsToShow >= macyItems.length) {
      buttonPortfolio.style.display = "none";
      portfolioContainer.style.height = "auto";
    }
  });
});


function scrollToPortfolio() {
  const portfolioSection = document.getElementById('portfolio');
  portfolioSection.scrollIntoView({ behavior: 'smooth' });
}