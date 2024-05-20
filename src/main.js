
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var taglineMain = document.querySelector(".tagline");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var makeYourOwnButton = document.querySelector(".make-new-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var makeMyBookButton = document.querySelector(".create-new-book-button");
var formView = document.querySelector(".form-view");
var priceTag = document.querySelector(".price-tag");
var homeView = document.querySelector(".home-view");
var viewSavedButton = document.querySelector(".view-saved-button");
var savedView = document.querySelector(".saved-view");

var savedCovers = [];
var currentCover;

addEventListener("load", showRandomCover);
randomCoverButton.addEventListener("click", showRandomCover);
makeYourOwnButton.addEventListener("click", showFormView);
viewSavedButton.addEventListener("click", showSavedCoverView);
homeButton.addEventListener("click", showHomePage);
makeMyBookButton.addEventListener("click", createUserBook);
saveCoverButton.addEventListener("click", saveGeneratedCover);

function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  saveMainCoverToCurrentCover();
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2,
  };
  return cover;
};

function showFormView() {
  homeView.classList.add("hidden");
  homeButton.classList.remove("hidden");
  formView.classList.remove("hidden");
  savedView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
};

function showSavedCoverView() {
  homeView.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  savedCoversSection.classList.remove("hidden");
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  showSavedCovers();
};

function showHomePage() {
  savedView.classList.add("hidden");
  homeView.classList.remove("hidden");
  homeButton.classList.add("hidden");
  formView.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveMainCoverToCurrentCover()
  saveCoverButton.classList.remove("hidden");
};

var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDescription1 = document.querySelector('#descriptor1');
var userDescription2 = document.querySelector('#descriptor2');

function createUserBook(event) {
  event.preventDefault()

  coverImage.src = userCover.value;
  coverTitle.innerText = userTitle.value;
  tagline1.innerText = userDescription1.value;
  tagline2.innerText = userDescription2.value;
  saveMainCoverToCurrentCover();
  showHomePage();
};

function saveGeneratedCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

function showSavedCovers() {
  savedCoversSection.innerHTML = '';
  var newInnerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    newInnerHTML += makeHTMLFromCover(savedCovers[i]);
  }
  savedCoversSection.innerHTML = newInnerHTML;
  var miniCoverElements = document.querySelectorAll(".mini-cover");
  for (var i = 0; i < miniCoverElements.length; i++) {
    miniCoverElements[i].addEventListener("dblclick", deleteSavedCover);
  }
};

function deleteSavedCover(event) {
  event.preventDefault()
  var idToDelete = event.currentTarget.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (idToDelete === savedCovers[i].id.toString()) {
      savedCovers.splice(i, 1);
    }
  }
  showSavedCovers();
};

function makeHTMLFromCover(cover) {
  var coverTagline1 = `<span class="tagline-1">${cover.tagline1}</span>`;
  var coverTagline2 = `<span class="tagline-2">${cover.tagline2}</span>`;
  var tagline = `<h3 class="tagline">A tale of ${coverTagline1} and ${coverTagline2}</h3>`;
  var title = `<h2 class="cover-title">${cover.title}</h2>`;
  var coverImage = `<img class="cover-image" src="${cover.coverImg}">`;
  var overlay = `<img class="overlay" src="./assets/overlay.png">`;
  var coverHTML = `<section class="mini-cover" id=${cover.id}>${coverImage}${title}${tagline}${overlay}</section>`;

  return coverHTML;
};

function saveMainCoverToCurrentCover() {
  var mainCover = createCover(coverImage.src, coverTitle.innerText, descriptor1.innerText, descriptor2.innerText);
  currentCover = mainCover;
};











