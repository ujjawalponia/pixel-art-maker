// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker").addEventListener("submit", makeGrid);

function makeGrid() {
  // Your code goes here!
  const tableHeight = document.getElementById("inputHeight").value;
  const tableWidth = document.getElementById("inputWidth").value;
  const table = document.getElementById("pixelCanvas");
  table.innerText="";
    
    
  //making of rows and columns
  for(let th = 0; th < tableHeight; ++th){
   const row = table.insertRow(-1);
    for(let tw = 0; tw < tableWidth; ++tw){
    const col = row.insertCell(-1);
    //input Color selection
    row.addEventListener("click", function(event){
   const pickColor = document.querySelector("#colorPicker").value;
   event.target.style.backgroundColor = pickColor;
    });
    //remove color on double click
    row.addEventListener("dblclick", function(evt){   
   evt.target.style.backgroundColor = 'transparent';
    });
    }
  }
  event.preventDefault();
}