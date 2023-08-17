//import bootstrap from 'bootstrap';

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

const grid = document.querySelector('.grid');

let msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});
