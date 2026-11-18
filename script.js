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


const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}
function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}




setInterval(nextSlide, 3000);


