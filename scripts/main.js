let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Pac-Man_(PMVS).png') {
        myImage.setAttribute ('src', 'images/kirbypac.jpg');
    } else {
        myImage.setAttribute ('src', 'images/Pac-Man_(PMVS).png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);

    myHeading.textContent = 'Pacman is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Pacman is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
