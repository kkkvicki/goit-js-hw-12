import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderImages(images, container) {
  const markup = images.map(image => createImageCard(image)).join('');
  container.insertAdjacentHTML('beforeend', markup);
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionsData: 'alt',
    });
  }
}

function createImageCard({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <div class="photo-card">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
        <div class="info">
          <ul class="info-list">
            <li><strong>Likes:</strong> ${likes}</li>
            <li><strong>Views:</strong> ${views}</li>
            <li><strong>Comments:</strong> ${comments}</li>
            <li><strong>Downloads:</strong> ${downloads}</li>
          </ul>
        </div>
      </a>
    </div>
  `;
}

export function showLoading(loader) {
  loader.classList.remove('hidden');
}

export function hideLoading(loader) {
  loader.classList.add('hidden');
}

export function clearImages(container) {
  container.innerHTML = '';
}
