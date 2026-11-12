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

function roomnumber(number)
{alert ("your room number is " + number);}
roomnumber (101);

function score (number)
{alert ("Your score in ACC is  " + number);}
score (95);

function room (name, roomtype)
{alert (name + " book a " + roomtype + "room");}
room ("daniel","standard");

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


let heading = document.querySelector(".abouts h2");
heading.textContent = "information about us";