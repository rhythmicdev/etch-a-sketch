const container = document.querySelector('#container');
for (j = 0; j < 16; j++) {
    const row = document.createElement('div');
    for (i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(96.5vh / 16)`
        square.style.height = `calc(96.5vh / 16)`
        square.addEventListener('mouseover', function (e) {
            e.target.style.background = 'blue';
        });
        row.appendChild(square);
    }
    container.appendChild(row);
}

const genButton = document.querySelector('#genButton');
genButton.onclick = function(){
    let gridNum = prompt("Enter the number of squares per side you'd like in your grid! (Max 100)");
}
