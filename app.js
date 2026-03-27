let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let heading = document.querySelector("h1");
    let randomColor = getRandomColor();
    heading.innerText = randomColor;

    let box = document.querySelector("div");
    box.style.backgroundColor = randomColor;

    console.log("Color Updated!");
});

function getRandomColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let RGBColor = `rgb(${red}, ${green}, ${blue})`
    return RGBColor;
}



https://github.com/muhammadasimafridi/generate-random-colors.git