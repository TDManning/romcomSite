//Iteration 0- 
// -When the page loads, we should see a cover with a randomly selected image, 
//    title and tagline which includes two random descriptors (coverImg, title, descriptor1, descriptor2).
// - Every time the user clicks the Show New Random Cover button, the random cover is displayed.

  // -Hint: you may need to update the value of the provided currentCover variable. 

  // -Hint: you may need to create a function that displays information on the DOM.

// Psuedocode: WHAT DO THEY WANT & WHATS THE PLAN: 


// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var homeButtonHidden = document.querySelector(".home-button hidden");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var descriptor1 = document.querySelector(".user-desc1");
var descriptor2 = document.querySelector(".user-desc2");
var createNewBookButton = document.querySelector(".create-new-book-button");

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

// Variable.addEventListener("what does it do", The Function (Written Below))
randomCoverButton.addEventListener("click", showRandomCover)


// Create your event handlers and other functions here 👇

function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)],
  coverTitle.innerText = titles[getRandomIndex(titles)],
  tagline1.innerText = descriptors[getRandomIndex(descriptors)],
  tagline2.innerText = descriptors[getRandomIndex(descriptors)]
}
console.log(showRandomCover)


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
