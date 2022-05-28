let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Alex.png') {
      myImage.setAttribute('src','images/Alex2.png');
    } else {
      myImage.setAttribute('src','images/Alex.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Yo! What is your name');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are super cool, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are super cool, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}