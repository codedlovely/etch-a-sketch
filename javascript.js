
const containerWidth = "540";
const containerHeight = "540";
const divWidth = "18";
const numberDivs = (containerWidth/divWidth) ** 2;

// set container width & height
const divContainer = document.getElementById('container');
divContainer.style.width = containerWidth + 'px';
divContainer.style.height = containerHeight + 'px';

// fill container with divs
for (let i=0; i<numberDivs; i++) {
    addDiv(divWidth-2);
}

// change div color
divColorChange();

// set button to do these things:
//  1. ask user how many squares per side
//  2. clear current grid
//  3. calculate div width
//  4. create a new grid
let gridButton = document.getElementById('refresh');
gridButton.addEventListener('click', () => {

    // show prompt
    let numGrid = window.prompt('How many squares per side do you want to put?');
    if (numGrid > 100 || numGrid < 20) {
        alert('Please input a number between 20 and 100');
        return;
    }
    
    // clear current grid
    const currentDiv = document.getElementById('container');
    rmDivs( currentDiv );
    
    // calculate div width
    let newWidth = containerWidth / numGrid - 2;
    
    // set div width & heigth
    for (let i=0; i<numGrid*numGrid; i++) {
        addDiv(newWidth);
    }

    divColorChange();
})

//----------
// add one div to container
//
function addDiv(newwidth) {
    
    if (newwidth == null || newwidth == 0) {
        console.log(newwidth);
        newwidth = divWidth;
    }

    // create div
    const newDiv = document.createElement('div');
    
    // add class 'grid' to div
    newDiv.classList.add('grid');
    newDiv.style.width = newwidth + 'px';
    newDiv.style.height = newwidth + 'px';
    newDiv.style.flexFlow = 0;
    newDiv.style.flexGrow = 0;
    newDiv.style.flexBasis = 'auto';
    
    // add div to container
    const currentDiv = document.getElementById('container');
    currentDiv.appendChild(newDiv);
}

//----------
// remove divs from container
//
function rmDivs( parent ) {
    while (parent.firstChild) {
        parent.removeChild( parent.firstChild );
    }
}

//----------
// change div background color when cursor hovers over
//
function divColorChange() {

    let divGrid = document.getElementById('container');
    divGrid.childNodes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'pink';
        });
    });
}
    