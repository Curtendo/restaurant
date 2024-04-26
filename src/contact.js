import TokyoTacos from './tokyo-tacos.jpg';

function addContactElements(contentDiv) {
    const newH1 = document.createElement("h1");
    newH1.classList.add("title");
    newH1.textContent = "Contact";

    const picAndTextDiv = document.createElement("div");
    picAndTextDiv.classList.add("pic-and-text");

    const tokyoPic = new Image();
    tokyoPic.src = TokyoTacos;
    tokyoPic.width = "300";

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-message");
    
    const p1 = document.createElement("p");
    // p1.classList.add("");
    p1.textContent = "Tacos in Japan";

    const p2 = document.createElement("p");
    // p2.classList.add("");
    p2.textContent = "12345 Shinjuku, Tokyo, Japan";

    const p3 = document.createElement("p");
    // p3.classList.add("");
    p3.textContent = "080-9154-2093";

    contentDiv.appendChild(newH1);
    contentDiv.appendChild(picAndTextDiv);
    picAndTextDiv.appendChild(tokyoPic);
    picAndTextDiv.appendChild(welcomeDiv);

    welcomeDiv.appendChild(p1);
    welcomeDiv.appendChild(p2);
    welcomeDiv.appendChild(p3);
}

export { addContactElements };