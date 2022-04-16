
const containerWidth = "540";
const containerHeight = "540";
const divWidth = "18";
const numberDivs = containerWidth/divWidth * containerHeight/divWidth;

// fill container with divs
for (let i=0; i<numberDivs; i++) {
    addDiv();
}

// change div background color when cursor hovers over
let divGrid = document.getElementById('container');
divGrid.childNodes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'pink';
    });
});

// a button to do these things:
//  1. ask user how many squares per side
//  2. clear current grid
//  3. calculate div width
//  4. create a new grid
let gridButton = document.getElementById('refresh');
gridButton.addEventListener('click', () => {

    // show prompt
    let numGrid = window.prompt('How many squares per side do you want?');
    if (numGrid > 100 || numGrid < 20) {
        alert('Please input a number between 20 and 100');
        return;
    }
    
    // clear current grid
    const currentDiv = document.getElementById('container');
    rmDivs( currentDiv );
    
    // calculate div width
    let newWidth = containerWidth / numGrid - 2;
    console.log(`width = ${newWidth}`);
    
    // set div width & heigth
//    addDiv(newWidth);
})

//----------
// add one div to container
//
function addDiv(newwidth) {
    
    if (newwidth == null || newwidth == 0) {
        newwidth = divWidth;
    }
    console.log(`addDiv width = ${newwidth}`);

    // create div
    const newDiv = document.createElement('div');
    
    // add class 'grid' to div
    newDiv.classList.add('grid');
    newDiv.style.width = toString(newwidth) + 'px';
    newDiv.style.height = toString(newwidth) + 'px';
    
    // container is where div will be added to
    const currentDiv = document.getElementById('container');
    
    // add div to container
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