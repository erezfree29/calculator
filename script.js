
// function makeGrid(rows,cols) {
//   const container = document.querySelector('.container');
//   let row = document.createElement('div');
//   row.className = 'row';
//   for (i = 0; i < rows; i++) {
//     let row = document.createElement('div');
//     row.className = 'row';
//     for (f = 0; f < cols; f++) {
//       let cell = document.createElement('div');
//       cell.className = 'cell';
//       cell.innerHTML = f+1
//       row.appendChild(cell);
//     }
//     container.appendChild(row);
//   }
//   container.addEventListener("mouseover", mouseOver);
//   container.addEventListener("mouseout", mouseOut);
// }

// makeGrid(16, 16);
// function mouseOver() {
//   const container = document.querySelector('.container');
//   container.style.color = "blue";
// }

// function mouseOut() {
//   const container = document.querySelector('.container');
//   container.style.color = "black";
// }

var equation = ['1'];



function dis(equation,val) {
  localStorage.setItem('number', val);
  display = document.querySelector('.screen');
  display.innerHTML = val
  equation.push(val)
  localStorage.setItem('input', JSON.stringify(equation));
  console.log(JSON.parse(localStorage.getItem('input')));
}


