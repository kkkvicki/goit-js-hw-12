import { displayError, getImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoading,
  hideLoading,
  clearImages,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const gallery = document.querySelector('#image-gallery');
const loader = document.querySelector('#loading-indicator');
const loadMoreButton = document.querySelector('#load-more-button');

let query = '';
let page = 1;

loadMoreButton.style.display = 'none';

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = input.value.trim();
  if (!query) {
    displayError('Please enter a request');
    loadMoreButton.style.display = 'none';
    return;
  }

  page = 1;
  clearImages(gallery);
  loadMoreButton.style.display = 'none';
  await fetchImages();
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  await fetchImages();
});

async function fetchImages() {
  showLoading(loader);
  try {
    const data = await getImages(query, page);
    const images = data.hits;
    const totalHits = data.totalHits;

    if (images.length === 0 && page === 1) {
      displayError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderImages(images, gallery);
    if (gallery.childElementCount >= totalHits) {
      displayError(
        "We're sorry, but you've reached the end of search results."
      );
      loadMoreButton.style.display = 'none';
    } else if (images.length > 0) {
      loadMoreButton.style.display = 'block';
    }

    smoothScroll();
  } catch (error) {
    displayError('Error fetching images');
    console.error(error);
  } finally {
    hideLoading(loader);
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
