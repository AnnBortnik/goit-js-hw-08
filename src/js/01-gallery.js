import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import "simplelightbox/dist/simple-lightbox.min.css";

const listEl = document.querySelector('.gallery');
const markUp = galleryItems.map(({preview, original, description}) => {
    return `<li class='gallery__item'>
    <a class='gallery__link' href='${original}'>
    <img loading='lazy' class='gallery__image' src='${preview}' alt='${description}'/>
    </a>
    </li>`;
}).join('');

listEl.insertAdjacentHTML('beforeend', markUp);

let lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    fadeSpeed: 250,
    captionPosition: 'bottom',
    captionsData: 'alt', 
    captionDelay: 250,
    close: false,
    enableKeyboard: true,
});