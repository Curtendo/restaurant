import { addHomeElements } from './home';
import { addMenuElements } from './menu';
import { addContactElements } from './contact';
import './style.css';

const contentDiv = document.querySelector("#content");
const navBar = document.querySelector("nav");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

function highlightNav(buttonID) {
    // Clear all selectors first
    const buttonArray = Array.from(navBar.children);
    buttonArray.forEach((navButton) => {
        navButton.classList.remove("nav-button-selected")
    })

    // Add highlight to current button
    const clickedButton = document.getElementById(buttonID);
    clickedButton.classList.add("nav-button-selected");
}

homeButton.addEventListener("click", function(e){
    contentDiv.textContent = "";
    addHomeElements(contentDiv);
    highlightNav(e.target.id);
})

menuButton.addEventListener("click", function(e){
    contentDiv.textContent = "";
    addMenuElements(contentDiv);
    highlightNav(e.target.id);
})

contactButton.addEventListener("click", function(e){
    contentDiv.textContent = "";
    addContactElements(contentDiv);
    highlightNav(e.target.id);
})

addHomeElements(contentDiv);