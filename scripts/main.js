function getRandomColor () {
    const hexColorCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G"]

    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += hexColorCharacter[Math.floor(Math.random() * hexColorCharacter.length)]
    }

    return color;
}

function renderRandomColor () {
    const currentRandomColor = getRandomColor();
    document.getElementById("htmlBody").style.backgroundColor=currentRandomColor;
    document.getElementById("htmlH1").innerText=currentRandomColor;
    console.log(currentRandomColor);
}

const randomColor = getRandomColor();
console.log("randomcolor", randomColor)

renderRandomColor();