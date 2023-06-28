const container = document.querySelector('#container');
const genButton = document.querySelector('#genButton');

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
                square.addEventListener('mouseover', function (e) {
                    e.target.style.background = '#393E46';
                });
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
        square.addEventListener('mouseover', function (e) {
            e.target.style.background = '#393E46';
        });
        row.appendChild(square);
    }
    container.appendChild(row);
}