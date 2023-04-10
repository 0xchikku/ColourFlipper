
const colourName = document.querySelector(".colour-name");
const changeColourButton = document.querySelector(".btn");
const body = document.body;

const generateRandomColour = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

changeColourButton.addEventListener("click", (e) => {
    e.preventDefault();
    const randomColour = generateRandomColour();
    colourName.textContent = randomColour;
    body.style.backgroundColor = randomColour;
});