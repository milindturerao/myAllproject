// var imageArray = ["1", "2", "3"];
var imageArrayContainer = document.getElementById("imageArray1");

function createImageArray() {
    var theImage = document.createElement('img');
    theImage.src = "img/drop.png";
    theImage.width = "10";
    theImage.style.margin = "-1px";
    return theImage;
}
let b = 98;
for (let i = 0; i <  b ; i++) {
    imageArrayContainer.appendChild(createImageArray());
}

var imageArrayContainer = document.getElementById("imageArray2");

function createImageArray() {
    var theImage = document.createElement('img');
    theImage.src = "/img/drop.png";
    theImage.width = "10";
    theImage.style.margin = "1px";
    return theImage;
}
b = 95;
for (let i = 0; i <  b ; i++) {
    imageArrayContainer.appendChild(createImageArray());
}

var imageArrayContainer = document.getElementById("imageArray3");

function createImageArray() {
    var theImage = document.createElement('img');
    theImage.src = "img/drop.png";
    theImage.width = "10";
    theImage.style.margin = "1px";
    return theImage;
}
b = 90;
for (let i = 0; i <  b ; i++) {
    imageArrayContainer.appendChild(createImageArray());
}


var imageArrayContainer = document.getElementById("imageArray4");

function createImageArray() {
    var theImage = document.createElement('img');
    theImage.src = "img/drop.png";
    theImage.width = "1px";
    theImage.style.margin = "1px";
    return theImage;
}
b = 98;
for (let i = 0; i <  b ; i++) {
    imageArrayContainer.appendChild(createImageArray());
}

var imageArrayContainer = document.getElementById("imageArray5");

function createImageArray() {
    var theImage = document.createElement('img');
    theImage.src = "img/drop.png";
    theImage.width = "10";
    theImage.style.margin = "0.5px";
    return theImage;
}
b = 85;
for (let i = 0; i <  b ; i++) {
    imageArrayContainer.appendChild(createImageArray());
}
