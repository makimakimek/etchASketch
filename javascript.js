function gridCreation(userAnswer) {
    const container = document.querySelector('#container');

    let counter = 0;

    let color = "black";
    
    for(let i = 0; i < userAnswer; i++) {
        counter++;
        const groupSquareContainer = document.createElement('div');
        let containerName = `container${counter}`;
        groupSquareContainer.setAttribute('id', containerName);
        container.appendChild(groupSquareContainer);

        for(let j = 0; j < userAnswer; j++) {
            const square = document.createElement('div');
            let squareName = `square${counter}`;
            square.setAttribute('id', squareName);
            groupSquareContainer.appendChild(square);

            const randomColorButton = document.querySelector('#randomColorButton');

            randomColorButton.addEventListener("click", () => {
                square.addEventListener("mouseover", (event) => {
                    event.target.style.backgroundColor = `${randomColorValues()}`;
                });
            });

            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = color;
            });
            

            /*square.addEventListener("mouseover", (event) => {
                //event.target.filter = "brightness(%10)";
            });*/
        }
    }
}

function newGrid() {
    const gridButton = document.querySelector('#button');
    let userAnswer = 16;
    gridCreation(userAnswer);

    gridButton.addEventListener("click", (event) => {
        for(let i = 0; i < userAnswer; i++) {            
            for(let j = 0; j < userAnswer; j++) {
                let squareName = `#square${j + 1}`;
                const square = document.querySelector(squareName);
                square.remove();
            }
        }

        for(let i = 0; i < userAnswer; i++) {
            let containerName = `#container${i + 1}`;
            const groupSquareContainer = document.querySelector(containerName);
            groupSquareContainer.remove();
        }

        userAnswer = prompt("how many squares per side would you want for the new grid?");

        while(userAnswer > 100) {
            userAnswer = prompt("please put in a number between 0-100");
        }
        
        gridCreation(userAnswer);
    });
}

function randomColorValues() {
    let randomColorRValue;
    let randomColorGValue;
    let randomColorBValue;
    let randomColorRGBValue;

    randomColorRValue = Math.floor(Math.random() * 256);
    randomColorGValue = Math.floor(Math.random() * 256);
    randomColorBValue = Math.floor(Math.random() * 256);

    randomColorRGBValue = `rgb(${randomColorRValue}, ${randomColorGValue}, ${randomColorBValue})`;
    return randomColorRGBValue;
}

newGrid();