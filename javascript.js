const container = document.querySelector('#container');
for (j = 0; j < 16; j++) {
    const row = document.createElement('div');
    for (i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.style.width = '16px';
        square.style.height = '16px';
        square.style.border = 'solid 1px black';
        square.addEventListener('mouseover', function (e) {
            e.target.style.background = 'blue';
        })
        row.appendChild(square);
    };
    container.appendChild(row);
};