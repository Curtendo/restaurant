import Tacos from './beeftacos.jpg';

function addHomeElements(contentDiv) {
    const newH1 = document.createElement("h1");
    newH1.classList.add("title");
    newH1.textContent = "Tacos in Japan";

    const picAndTextDiv = document.createElement("div");
    picAndTextDiv.classList.add("pic-and-text");

    const tacosPic = new Image();
    tacosPic.src = Tacos;
    tacosPic.width = "400";

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-message");
    welcomeDiv.textContent = "Welcome to Tacos in Japan. Have you ever had any tacos in Japan? They aren't very good, right? That's why when you come to Tacos in Japan, you getting actual, authentic, flavor-full tacos, every time.";

    contentDiv.appendChild(newH1);
    contentDiv.appendChild(picAndTextDiv);
    picAndTextDiv.appendChild(tacosPic);
    picAndTextDiv.appendChild(welcomeDiv);
}

export { addHomeElements };