'use strict';
const anterior = document.querySelector('#previous');

const proximo = document.querySelector('#next');

const images = [
    {'id' : '1', 'url' : './img/galaxy_nebula_stars_191423_1280x960.jpg'},
    {'id' : '2', 'url' : './img/galaxy_nebula_stars_194459_1600x1200.jpg'},
    {'id' : '3', 'url' : './img/galaxy_nebula_stars_198253_1280x960.jpg'},
    {'id' : '4', 'url' : './img/galaxy_nebula_stars_200059_1280x960.jpg'},
    {'id' : '5', 'url' : './img/galaxy_space_light_stars_nebula_59618_1280x960.jpg'},
    {'id' : '6', 'url' : './img/galaxy_stars_light_nebula_61697_1280x960.jpg'},
];

const containerItems  = document.querySelector('#container-items');

const loadImages = (images, containerItems) => {
    images.forEach((images) => {
        containerItems.innerHTML += `
            <div class="item">
                <img src="${images.url}"
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

anterior.addEventListener('click', previous);
proximo.addEventListener('click', next);

