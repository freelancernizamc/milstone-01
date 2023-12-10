// banner animation
const images = [
    'assets/imges/nizam.png',
    'assets/imges/nizam2.jpeg',
    'assets/imges/nizam1.png',
    'assets/imges/nizam2.jpeg',
    'assets/imges/nizam3.jpg',
    'assets/imges/nizam.png',
    'assets/imges/nizam3.jpg'
];

let imgIndex = 0;
const imgE1 = document.getElementById('banner-img');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);

    imgE1.setAttribute('src', imgUrl);
    imgE1.classList.add('fade-in-out'); // Add the CSS class for animation
    imgIndex++;
}, 1000);


let element = document.getElementById("video-sudu");
element.style.backgroundColor= "indigo";
element.style.fontSize = "40px";
element.style.textAlign ="center";
element.style.color ="Yellow";



