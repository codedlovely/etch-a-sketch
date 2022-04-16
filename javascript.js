
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

//----------
// add one div to container
//
function addDiv() {
    // create div
    const newDiv = document.createElement('div');
    // add class 'grid' to div
    newDiv.classList.add('grid');
    // container is where div will be added to
    const currentDiv = document.getElementById('container');
    // add div to container
    currentDiv.appendChild(newDiv);
}