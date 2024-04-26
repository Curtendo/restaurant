import FishTacos from './fish-tacos.jpg';
import CarneTacos from './carne-asada-tacos.jpg';
import BirriaTacos from './birria-tacos.jpg';
import Nachos from './beef-nachos.jpg';

function addMenuElements(contentDiv) {
    const newH1 = document.createElement("h1");
    newH1.classList.add("title");
    newH1.textContent = "Menu";

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-contents");

    // Menu 1
    const menuItemDiv1 = document.createElement("div");
    menuItemDiv1.classList.add("menu-item-div")

    const fishTacosPic = new Image();
    fishTacosPic.src = FishTacos;
    fishTacosPic.width = "250";

    const menuDescription1 = document.createElement("div");
    menuDescription1.classList.add("welcome-message");
    menuDescription1.textContent = "Fancy some fish? How about some grilled Mahi-Mahi topped with cilantro and purple cabbage, finished off with some melted cheese and a side of limes to squeeze as your heart desires.";

    // Menu 2
    const menuItemDiv2 = document.createElement("div");
    menuItemDiv2.classList.add("menu-item-div")

    const carneTacosPic = new Image();
    carneTacosPic.src = CarneTacos;
    carneTacosPic.width = "250";

    const menuDescription2 = document.createElement("div");
    menuDescription2.classList.add("welcome-message");
    menuDescription2.textContent = "Pork more your style? Dig into these Carne Asada Tacos, complete with fresh salsa and guac, and topped with crumbling cheese, white sauce, and lime.";

    // Menu 3
    const menuItemDiv3 = document.createElement("div");
    menuItemDiv3.classList.add("menu-item-div")

    const birriaTacosPic = new Image();
    birriaTacosPic.src = BirriaTacos;
    birriaTacosPic.width = "250";

    const menuDescription3 = document.createElement("div");
    menuDescription3.classList.add("welcome-message");
    menuDescription3.textContent = "Don't these Birria Tacos look delicious? I'm not really sure what it is, but it looks like some kind of meat put into a hybrid taco/quesadilla, topped with onions and cilantro.";
    //Menu 4
    const menuItemDiv4 = document.createElement("div");
    menuItemDiv4.classList.add("menu-item-div")

    const nachosPic = new Image();
    nachosPic.src = Nachos;
    nachosPic.width = "250";

    const menuDescription4 = document.createElement("div");
    menuDescription4.classList.add("welcome-message");
    menuDescription4.textContent = "Don't nachos always sound good? And then you order some and realize they're too much and you're struggling to finish all the food you ordered?  Well, here's some nachos to try it again!";

    // Appending everything
    contentDiv.appendChild(newH1);

    menuItemDiv1.appendChild(fishTacosPic);
    menuItemDiv1.appendChild(menuDescription1);
    menuDiv.appendChild(menuItemDiv1);

    menuItemDiv2.appendChild(carneTacosPic);
    menuItemDiv2.appendChild(menuDescription2);
    menuDiv.appendChild(menuItemDiv2);

    menuItemDiv3.appendChild(birriaTacosPic);
    menuItemDiv3.appendChild(menuDescription3);
    menuDiv.appendChild(menuItemDiv3);

    menuItemDiv4.appendChild(nachosPic);
    menuItemDiv4.appendChild(menuDescription4);
    menuDiv.appendChild(menuItemDiv4);

    contentDiv.appendChild(menuDiv);
}

export { addMenuElements };