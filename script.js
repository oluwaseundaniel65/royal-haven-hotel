console.log ( 
    "Royal Haven Hotel"
);

const hotelroom ="standard room";
let roomprice =45000;
console.log ("hotelroom");
let standardroom = 45000;
let numberofnight = 3;
let totalamount = standardroom * numberofnight;
console.log (
    totalamount
);
let a = 10;
let b = 7;
console.log (
    a==b
);
console.log (
    a===b
);
console.log (
    a>b
);
console.log (
    a<b
);
console.log (
    a>=b
);
console.log (
    a<=b
);
console.log (
    a!=b
);
function welcome(name)
{console.log("Welcome to Royal Haven hotel, your comfort is our priority, " + name);}
welcome("david");



const hotelname = "royalhaven";
let roomprices = 45000;
let availablerooms = 10;

function showhotelinfo ()
{console.log ("hotel name: " + hotelname);
console.log ("room prices: " + roomprices);
console.log ("availablerooms: " + availablerooms);}
showhotelinfo();

function bookroom ()
{if(availablerooms > 0) {availablerooms =availablerooms - 1; console.log("room booked successfully"); console.log ("room left:" + availablerooms)} 
else {console.log ("sorry, no rooms available");}}
bookroom ();


let heading = document.querySelector(".abouts");
heading.style.color = "blue";

let bookbutton = document.querySelector (".btn");
bookbutton.addEventListener("dblclick", function (){alert("which of the room are you interested in");});

let menutoggle = document.querySelector (".menu-toggle");
let navlink = document.querySelector (".nav-links");
menutoggle.addEventListener("click", function(){navlink.classList.toggle("show-menu");});


const heroSlides = document.querySelectorAll(".slides .slide");

let heroCurrentSlide = 0;

function showheroSlide(index) {

    heroSlides.forEach(function(slide) {
        slide.classList.remove("active");
    });
    heroSlides[index].classList.add("active");
}
function nextheroSlide() {

    heroCurrentSlide++;

    if (heroCurrentSlide >= heroSlides.length) {
        heroCurrentSlide = 0;
    }

    showheroSlide(heroCurrentSlide);
}
function prevheroSlide() {

    heroCurrentSlide--;

    if (heroCurrentSlide < 0) {
        heroCurrentSlide = heroSlides.length - 1;
    }

    showheroSlide(heroCurrentSlide);
}
setInterval(nextheroSlide, 3000);



const offerSlides = document.querySelectorAll(".slider .slide");

let offerCurrentSlide = 0;

function showofferSlide(index) {

    offerSlides.forEach(function(slide) {
        slide.classList.remove("active");
    });
    offerSlides[index].classList.add("active");
}
function nextofferSlide() {

    offerCurrentSlide++;

    if (offerCurrentSlide >= offerSlides.length) {
        offerCurrentSlide = 0;
    }

    showofferSlide(offerCurrentSlide);
}
function prevofferSlide() {

    offerCurrentSlide--;

    if (offerCurrentSlide < 0) {
        offerCurrentSlide = offerSlides.length - 1;
    }

    showofferSlide(offerCurrentSlide);
}
setInterval(nextofferSlide, 3000);


let videos = ["promotion.mp4", "love.mp4.mp4"];
let currentvideo = 0;

let video = document.querySelector (".slide");

let nextbtn = document.querySelector (".next-button");

let prevbtn = document.querySelector (".prev-button");

 nextbtn.addEventListener ("click", function () {currentvideo++; if(currentvideo >= videos.length) {currentvideo = 0;} 
 video.src = videos [currentvideo];
 video.play();
});

prevbtn.addEventListener ("click", function () {currentvideo--; if (currentvideo < 0) {currentvideo = videos.length - 1;} 
video.src = videos [currentvideo];
video.play ();
});



   

function prevofferSlide() {

    offerCurrentSlide--;

    if (offerCurrentSlide < 0) {
        offerCurrentSlide = offerSlides.length - 1;
    }

    showofferSlide(offerCurrentSlide);
}


