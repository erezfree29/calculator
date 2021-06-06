
var equation = [];
display = document.querySelector('.screen')
function dis(val) {
  if (display.innerHTML == '0') {
    display.innerHTML = val;
   } else if (val != '+' && val != '-'   && val != '*'   && val != '/' 
    && display.innerHTML != '+'  && display.innerHTML != '-'  && display.innerHTML != '*'  && display.innerHTML != '/') {
    display.innerHTML += val
  } else if  (val == '+' || val == '-'   || val == '*'   || val == '/'){
    equation.push(display.innerHTML)
    equation.push(val) 
    console.log(equation); 
    display.innerHTML = val
  } else if (display.innerHTML == '+' || display.innerHTML == '+'  || display.innerHTML == '*'  || display.innerHTML == '/' ){
    display.innerHTML = val;
  }
  
}

function restart() {
  display.innerHTML = '0';
  equation = [];
} 

function solve () {
  equation.push(display.innerHTML)
  console.log(equation)
  result = parseFloat(equation[0])
  for (i = 0; i < equation.length; i+= 2) {
    if (equation[i+1] == '+') {
      let number =  parseFloat(equation[i+2]);
      result += parseFloat(equation[i+2]);
    } else if (equation[i+1] == '-') {
      result -= parseFloat(equation[i+2]);
    } else if (equation[i+1] == '*') {
      result = result *  parseFloat(equation[i+2]);
    } else if (equation[i+1] == '/') {
      result = result /  parseFloat(equation[i+2]);
    }

  }
  display.innerHTML = result;
  equation = []
}

let users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

console.log(users.Alan.online);