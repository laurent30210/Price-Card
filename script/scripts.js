let button = document.querySelector('.red, .black, .blue, .yellow');
let bgd = document.querySelector(".card");

for(var i = 0; i < button.length; i++) {
  var p = button[i];
} 

button.addEventListener('mouseover', backgroundColor);
button.addEventListener('mouseout', backgroundWhite);


function backgroundColor () {

  if (button == document.querySelector('.red')) {
    bgd.style.backgroundColor = '#f03434';
    document.querySelector('p').style.color = 'white';

  };
  if (button == document.querySelector('.black')) {
    bgd.style.backgroundColor = 'black';
    document.querySelector('p').style.color = 'white';
  };
  if (button == document.querySelector('.blue')) {
    bgd.style.backgroundColor = '#19b5fe';
    document.querySelector('p').style.color = 'white';
  };   
  if (button == document.querySelector('.yellow')) {
    bgd.style.backgroundColor = '#ffff7e';
    document.querySelector('p').style.color = 'white';
  }; 
}


function backgroundWhite() {
  
  bgd.style.backgroundColor = 'white';
  document.querySelector('p').style.color = '#7c7c7c';
 }
// function backgroundRed() {
//   if (button == document.querySelector('.red')) {
//       bgd.style.backgroundColor = 'red';
//       document.querySelector('p').style.color = 'white';
//   };   
//  } 

// function backgroundBlack() {
//   if (button == document.querySelector('.black')) {
//     bgd.style.backgroundColor = 'black';
//     document.querySelector('p').style.color = 'white';
//   }; 
//  }
// function backgroundblue() {
//   bgd.style.backgroundColor = 'blue';
//  }
    
