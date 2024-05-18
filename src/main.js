// //Iteration 0- 
// // -When the page loads, we should see a cover with a randomly selected image, 
// //    title and tagline which includes two random descriptors (coverImg, title, descriptor1, descriptor2).
// // - Every time the user clicks the Show New Random Cover button, the random cover is displayed.

// // -Hint: you may need to update the value of the provided currentCover variable. 

// // -Hint: you may need to create a function that displays information on the DOM.

// // Psuedocode: WHAT DO THEY WANT & WHATS THE PLAN: 


// // Create variables targetting the relevant DOM elements here 👇


var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var taglineMain = document.querySelector(".tagline")
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var makeYourOwnButton = document.querySelector(".make-new-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var descriptor1 = document.querySelector(".user-desc1");
var descriptor2 = document.querySelector(".user-desc2");
var createNewBookButton = document.querySelector(".create-new-book-button");
var formView = document.querySelector(".form-view");
var priceTag = document.querySelector(".price-tag");
var homeView = document.querySelector(".home-view");
var viewSavedButton = document.querySelector(".view-saved-button");



// We've provided a few variables below

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here :point_down:
// Variable.addEventListener("what does it do", The Function (Written Below))

addEventListener("load", showRandomCover);
randomCoverButton.addEventListener("click", showRandomCover);
makeYourOwnButton.addEventListener("click", showFormView);
viewSavedButton.addEventListener("click", showSavedCoverView);
homeButton.addEventListener("click", showHomePage);



// Create your event handlers and other functions here :point_down:

function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)],
  coverTitle.innerText = titles[getRandomIndex(titles)],
  tagline1.innerText = descriptors[getRandomIndex(descriptors)],
  tagline2.innerText = descriptors[getRandomIndex(descriptors)]
};


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};

function showFormView() {
  homeView.classList.add("hidden");
  homeButton.classList.remove("hidden");
  formView.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
};


function showSavedCoverView() {
  homeView.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  savedCoversSection.classList.remove("hidden");
  homeButton.classList.remove("hidden");
};

function showHomePage() {
  homeView.classList.remove("hidden");
  homeButton.classList.add("hidden");
  formView.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
};








