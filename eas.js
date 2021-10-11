
const container = document.getElementById("container");
let colouredCells = []
function createGrid(rowNum, columnNum) {
    // Create required number of rows and columns

    container.style.setProperty("--grid-rows", rowNum);
    container.style.setProperty("--grid-cols", columnNum);
   

    for (c = 0; c < (rowNum * columnNum); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
      };
    };
      
 createGrid(25, 25);

var allCells = document.querySelectorAll(".grid-item")

for (i=0; i < allCells.length; i++){
  item = allCells[i];
  watch(item);
}

function watch(item) {
  let currentCell = item;
  currentCell.addEventListener("mouseover", highlight);
  
  // currentCell.addEventListener("mouseout", removeHighlight);
}

function highlight(){
  this.style.backgroundColor = 'green';
  colouredCells.unshift(this);
  console.log(colouredCells);
}
var clear = document.getElementById("clearButton");
clear.onclick = function() {
  removeHighlight(colouredCells);

}

function removeHighlight(list){
  for (i=list.length-1; i >= 0; i--){
    item = list[i];
    item.style.backgroundColor = 'white';
  }
}
