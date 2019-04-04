// Cache the DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav1 = document.querySelector(".menu-nav1");
const menuNav2 = document.querySelector(".menu-nav2");
const navItems = document.querySelectorAll(".nav-item");
const navBar = document.querySelector(".nav-all-container");
const showDescriptionBtn = document.querySelector(".description-show-hide-btn");
const descriptionParagraph = document.querySelector("#description-paragraph");
const caretIcon = document.querySelector("#caret");
const showMoreOrLessText = document.querySelector("#show-more-less");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav1.classList.add("show");
    menuNav2.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    navBar.classList.add("push-content");

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav1.classList.remove("show");
    menuNav2.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    navBar.classList.remove("push-content");

    //Set Menu State
    showMenu = false;
  }
}

// Description paragraph
let showDescription = false;
caretIcon.classList.add("fa-caret-down");

showDescriptionBtn.addEventListener("click", toggleShowDescription);

function toggleShowDescription() {
  if (!showDescription) {
    showMoreOrLessText.innerHTML = "Show Less";
    descriptionParagraph.style.display = "contents";
    caretIcon.classList.remove("fa-caret-down");
    caretIcon.classList.add("fa-caret-up");

    //Set Description State
    showDescription = true;
  } else {
    showMoreOrLessText.innerHTML = "Show More";
    descriptionParagraph.style.display = "none";
    caretIcon.classList.remove("fa-caret-up");
    caretIcon.classList.add("fa-caret-down");

    //Set Description State
    showDescription = false;
  }
}
