let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexValues = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i <= 5; i++) {
        colors += myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const updateGradient = () => {
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.style.backgroundColor = rgb1;
    btn2.style.backgroundColor = rgb2;
};

btn1.addEventListener("click", () => {
    rgb1 = hexValues();
    btn1.innerText = rgb1;
    updateGradient();
});

btn2.addEventListener("click", () => {
    rgb2 = hexValues();
    btn2.innerText = rgb2;
    updateGradient();
});

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("Copied to clipboard!");
});