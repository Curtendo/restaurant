import Tacos from './beeftacos.jpg';

const contentDiv = document.querySelector("#content");

function addHomeElements(contentDiv) {
    const newH1 = document.createElement("h1");
    newH1.classList.add("title");
    newH1.textContent = "Tacos in Japan";

    const tacosPic = new Image();
    tacosPic.src = Tacos;
    tacosPic.width = "500";

    const picAndTextDiv = document.createElement("div");
    picAndTextDiv.classList.add("pic-and-text");

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-message");
    welcomeDiv.textContent = "Welcome to tacos in Japan";

    contentDiv.appendChild(newH1);
    contentDiv.appendChild(picAndTextDiv);
    picAndTextDiv.appendChild(tacosPic);
    picAndTextDiv.appendChild(welcomeDiv);
}

export { addHomeElements };