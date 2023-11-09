function divCreation() {
    const container = document.querySelector('#container');

    counter = 0;
    
    for(let i = 0; i < 16; i++) {
        counter++;
        const groupSquareContainer = document.createElement('div');
        let containerName = `container${counter}`;
        groupSquareContainer.setAttribute('id', containerName);
        container.appendChild(groupSquareContainer);

        for(let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            let squareName = `square${counter}`;
            square.setAttribute('id', squareName);
            groupSquareContainer.appendChild(square);          
        }
    }    
}

divCreation();