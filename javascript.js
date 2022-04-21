
const containerWidth = "480";
const containerHeight = "480";
const divWidth = "18";
const numberDivs = (containerWidth/divWidth) ** 2;
const alertMessage = "Please input an integer between 20 and 100"
const colorNames = ['red', 'orange', 'yellow', 'limegreen', 'turquoise', 'blue', 'blueviolet'];

let colorSwitch = 0;
let colorSelect = "pink";

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

// switch between single color and rainbow
let switchButton = document.getElementById('toggle-rainbow');
switchButton.addEventListener('click', () => {

    // set color selection
    colorSwitch = switchButton.checked;
})

// change color selection
let changeColor = document.getElementById('color-select');
changeColor.addEventListener('click', () => {
    colorSelect = changeColor.value;
})

// set button to do these things:
//  1. ask user how many squares per side they want
//  2. clear current grid
//  3. calculate div width
//  4. create a new grid
let gridButton = document.getElementById('refresh');
gridButton.addEventListener('click', () => {

    // show prompt
    let numGrid = window.prompt('How many squares per side do you want to create? (20 to 100)');
    if (numGrid == null || numGrid == 0) {
        return;
    }
    if (numGrid > 100 || numGrid < 20) {
        alert(alertMessage);
        return;
    }
    let tempnum = Number(numGrid);
    if (Number.isInteger(tempnum) == false) {
        alert(alertMessage);
        return;
    }
    
    // clear current grid
    const currentDiv = document.getElementById('container');
    rmDivs( currentDiv );
    
    // calculate div width
    let newWidth = containerWidth / numGrid - 2;
    
    // set div width & heigth
    for (let i=0; i<numGrid**2; i++) {
        addDiv(newWidth);
    }

    divColorChange();
})

//----------
// add one div to container
//
function addDiv(newwidth) {
    
    if (newwidth == null || newwidth == 0) {
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
            div.style.backgroundColor = colorSelect;

            if (colorSwitch) {
                // rainbow
                div.style.backgroundColor = getRandomColorname();
            } else {
                div.style.backgroundColor = colorSelect;
            }
        });
    });
}

//----------
// return one of rainbow colornames
//
function getRandomColorname () {

    // get a random number
    let num = getRandomInt(0, 6);

    // return colorname
    return colorNames[num];

}

//----------
// return random number between x and y, include x and y
//
function getRandomInt (x, y) {
    x = Math.ceil(x);
    y = Math.floor(y);
    return Math.floor(Math.random() * (y - x + 1) + x);
}
