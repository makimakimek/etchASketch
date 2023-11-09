function gridCreation(userAnswer) {
    const container = document.querySelector('#container');

    let counter = 0;
    
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
            
            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            });

            /*square.addEventListener("mouseout", (event) => {
                event.target.style.backgroundColor = "white";
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

newGrid();