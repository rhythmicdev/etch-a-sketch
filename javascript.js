const container = document.querySelector('#container');
const genButton = document.querySelector('#genButton');
const colorToggle = document.querySelector('#colorToggle');

let useColorizer = false;

function colorRandomizer() {
    return Math.floor(Math.random()*16777215).toString(16);
}   

function mousePainter(e) {
    if (useColorizer) {
        e.target.style.background = `#${colorRandomizer()}`;
    } else {
        e.target.style.background = 'black';
    }
}

genButton.onclick = function(){
    let gridNum = prompt("Enter the number of squares per side you'd like in your grid! (Max 100)");
    gridNum = parseInt(gridNum);

    if (!isNaN(gridNum) && gridNum > 0 && gridNum <= 100) {
        container.innerHTML = '';

        for (j = 0; j < gridNum; j++) {
            const row = document.createElement('div');
            for (i = 0; i < gridNum; i++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.style.width = `calc(95vh / ${gridNum})`
                square.style.height = `calc(95vh / ${gridNum})`
                square.addEventListener('mouseover', mousePainter);
                row.appendChild(square);
            }
            container.appendChild(row);
        }
    } else {
        alert("Invalid input, please make sure to enter a valid number between 1 and 100");
    }
}

for (j = 0; j < 16; j++) {
    const row = document.createElement('div');
    for (i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(95vh / 16)`
        square.style.height = `calc(95vh / 16)`
        square.addEventListener('mouseover', mousePainter);
        row.appendChild(square);
    }
    container.appendChild(row);
}

colorToggle.addEventListener('click', function() {
    useColorizer = !useColorizer;
});