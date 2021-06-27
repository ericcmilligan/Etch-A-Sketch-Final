const grid = document.querySelector('.gridPage');
const rubberBtn = document.querySelector('.rubber');
const paintBtn = document.querySelector('.paint');
const resetBtn = document.querySelector('.reset');

function createGrid(){
    for(let i = 0; i < 256; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("square");
        grid.appendChild(gridDiv);
    }
}

function updateGrid(){
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", 
    'repeat(${16}, 2fr)')
    grid.style.setProperty("grid-template-rows", 
    'repeat(${16}, 2fr)')
    for (let i = 0; i < 16 * 16; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("square");
        grid.appendChild(gridDiv);
      }
}

function paintActivate(){
  const square = document.querySelector("div");
  square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "colour");
});
};

function rubberActivate(){
  const rubberSquare = document.querySelector("div");
  rubberSquare.addEventListener("mouseover", function(event) {
    event.target.classList.replace("colour", "square");
  });
};

function resetBoard(){
  grid.innerHTML = "";
  createGrid();
}



rubberBtn.onclick = rubberActivate;
paintBtn.onclick = paintActivate;
resetBtn.onclick = resetBoard;




createGrid();