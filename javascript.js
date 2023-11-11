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

            const colorPicker = document.querySelector('#colorPicker');
            const randomColorButton = document.querySelector('#randomColorButton');
            const shadingButton = document.querySelector('#shadingButton');
            const clearButton = document.querySelector('#clearButton');

            let shadingAmount;
            let brightnessValue;

            colorPicker.addEventListener("change", (event) => {
                color = event.target.value;

                square.addEventListener("mouseover", (event) => {
                    event.target.style.backgroundColor = color;
                });
            });

            colorPicker.addEventListener("mouseover", (event) => {
                event.target.style.opacity = "1";
            });

            colorPicker.addEventListener("mouseout", (event) => {
                event.target.style.opacity = "0.7";
            });

            randomColorButton.addEventListener("click", () => {
                square.addEventListener("mouseover", (event) => {
                    event.target.style.backgroundColor = `${randomColorValues()}`;
                });
            });

            randomColorButton.addEventListener("mouseover", (event) => {
                event.target.style.opacity = "1";
            });

            randomColorButton.addEventListener("mouseout", (event) => {
                event.target.style.opacity = "0.7";
            });

            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = color;
            });

            shadingButton.addEventListener("click", () => {
                shadingAmount = 100;
                square.addEventListener("mouseover", (event) => {
                    brightnessValue = `brightness(${shadingAmount}%)`;
                    event.target.style.filter = brightnessValue;                   
                    event.target.style.backgroundColor = color;
                    
                    shadingAmount = shadingAmount - 10;
                    
                });
            });
            
            shadingButton.addEventListener("mouseover", (event) => {
                event.target.style.opacity = "1";
            });

            shadingButton.addEventListener("mouseout", (event) => {
                event.target.style.opacity = "0.7";
            });

            clearButton.addEventListener("click", () => {
                shadingAmount = 100;
                brightnessValue = `brightness(${shadingAmount}%)`;
                square.style.filter = brightnessValue;
                square.style.backgroundColor = "white";
            });

            clearButton.addEventListener("mouseover", (event) => {
                event.target.style.opacity = "1";
            });

            clearButton.addEventListener("mouseout", (event) => {
                event.target.style.opacity = "0.7";
            });
        }
    }
}

function newGrid() {
    const gridButton = document.querySelector('#newGridButton');
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

    gridButton.addEventListener("mouseover", (event) => {
        event.target.style.opacity = "1";
    });

    gridButton.addEventListener("mouseout", (event) => {
        event.target.style.opacity = "0.7";
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