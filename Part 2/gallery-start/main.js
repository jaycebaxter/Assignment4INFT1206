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

// Automatically loads the first image because it wasn't doing it for some reason
// Probably because I renamed stuff
displayedImage.src = `images/${immies[0]}`;
displayedImage.alt = alts[immies[0]];

/* Looping through images */

immies.forEach (image => {
    
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', clickPic => {
        displayedImage.src = clickPic.target.src;
        displayedImage.alt = clickPic.target.alt;
    });
})



/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    let buttonClass = btn.getAttribute('class');

    if (buttonClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Light Mode';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Dark Mode';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});