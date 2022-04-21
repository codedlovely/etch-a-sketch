
const containerWidth = "540";
const containerHeight = "540";
const divWidth = "18";
const numberDivs = (containerWidth/divWidth) ** 2;
const colorNames = ['red', 'orange', 'yellow', 'limegreen', 'turquoise', 'blue', 'blueviolet'];

let colorSwitch = 0;
let colorSelect = "pink";
let sliderValue = 30;

// set container width & height
const divContainer = document.getElementById('playground');
divContainer.style.width = containerWidth + 'px';
divContainer.style.height = containerHeight + 'px';

// fill container with divs
for (let i=0; i<numberDivs; i++) {
    addDiv(divWidth-2);
}

// change div color
divColorChange();

// switch between single color and rainbow
let switchButton = document.getElementById('togglerainbow');
switchButton.addEventListener('click', () => {

    // set color selection
    colorSwitch = switchButton.checked;
})

// change color picker
let currentPicker = document.getElementById('picker');
currentPicker.addEventListener('change', () => {
    colorSelect = currentPicker.value;
})

// change slider
let currentSlider = document.getElementById('slider');
currentSlider.addEventListener('change', () => {

    sliderValue = currentSlider.value;
})

// set button to do these things:
//  1. get grid size from slider
//  2. clear current grid
//  3. calculate div width
//  4. create a new grid
let gridButton = document.getElementById('refresh');
gridButton.addEventListener('click', () => {

    // get grid size from slider
    let numGrid = sliderValue;
    
    // clear current grid
    const currentDiv = document.getElementById('playground');
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
    
    // add div to playground
    const currentDiv = document.getElementById('playground');
    currentDiv.appendChild(newDiv);
}

//----------
// remove divs from playground
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

    let divGrid = document.getElementById('playground');
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
