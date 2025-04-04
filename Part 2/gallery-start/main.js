const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const immies = [`butterfly.jpg`, `egypt.jpg`, `eye.jpg`, `flowers.jpg`, `waves.jpg`];

/* Declaring the alternative text for each image file */

const alts = {
    'butterfly.jpg' : "A picture of a monarch butterfly on a leaf.",
    'egypt.jpg' : "A painting from ancient Egypt depicting 6 figures; 3 people kneel on the left, while 3 are larger and seem to be of greater importance. One of them appears to be the god Anubis.",
    'eye.jpg' : "A close-up picture of a blue human eye.",
    'flowers.jpg' : "A picture of purple and white flowers.",
    'waves.jpg' : "A photo of a white, foamy ocean wave."

}

/* Looping through images */

immies.forEach {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(clickPic) {
        displayedImage.src = clickPic.target.src;
        displayedImage.alt = clickPic.target.alt;
    });

}

/* Wiring up the Darken/Lighten button */
