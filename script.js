const gridContainer = document.querySelector(".containerDiv");
const gridOptions = document.querySelector('.options');

/*The Initial 16x16 grid
Inside this div we keep creating a new div and appending it to the the parent  16 times*/
for(let i = 1; i <= 256; i++){
    const gridSquare = document.createElement("div");
    /*Here our square div have a css height and Width of 40px 
    meaning if we reduce the size of the container the hardcoded height 
    and width will make the squares overflow outside I implement 
    the square size for it to fit dynamicaly even if the container is*/
    let squareSize = 100 / 16;
    gridSquare.style.flexBasis = `${squareSize}%`
    gridSquare.style.height= `${squareSize}%`
    //Hover Effect
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("divHover");
    }); 
    gridContainer.appendChild(gridSquare);
};

const gridButton = document.createElement("button");
gridButton.textContent = "Generate Grid";
gridOptions.appendChild(gridButton);
gridButton.classList.add("gridButton");


gridButton.addEventListener("click", () => {
    let newGrid = prompt("Enter Number Of Squares You Need between 1 - 100");
    gridContainer.innerHTML = "";   //Clears out the 16x16 grid
    if (newGrid > 100){
        alert('Thats Prolly too much');
        window.location.reload(); //reloads the page to default to the usual 16x16 grid
    } else {
        let iterations = newGrid * newGrid;
        for(let i = 1; i <= iterations; i++){
        const gridSquare = document.createElement("div");
        /*In order for the square to keep fitting dynamically 
        let the container size bee 100% and divide it with newGrid to get 
        their sizes that make them fit perfectly without overlapping */
        let squareSize = 100 / newGrid;
        gridSquare.style.flexBasis = `${squareSize}%`
        gridSquare.style.height= `${squareSize}%`
        //Hover Effect
        gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("divHover");
        }); 
        gridContainer.appendChild(gridSquare);
    }
    }
});


