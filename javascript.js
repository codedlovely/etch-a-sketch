
const containerWidth = "540";
const containerHeight = "540";
const divWidth = "18";
const numberDivs = containerWidth/divWidth * containerHeight/divWidth;
//console.log(`divs = ${numberDivs}`);

// fill container with divs
for (let i=0; i<numberDivs; i++) {
    addDiv();
}

//----------
// add one div to container
//
function addDiv() {
    const newDiv = document.createElement('div');
    const currentDiv = document.getElementById('container');
    currentDiv.appendChild(newDiv);
}