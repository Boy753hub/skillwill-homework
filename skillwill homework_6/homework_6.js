//#1
// const modal = document.getElementById("myModal");

// const button = document.getElementById("myButton");

// const span = document.getElementsByClassName("close")[0];

// button.onclick = function() {
//   modal.style.display = "block";
// };

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

//#2

// const colorInput = document.getElementById("colorInput");
// const changeColorButton = document.getElementById("changeColorButton");

// changeColorButton.onclick = function() {
//   let color = colorInput.value.toLowerCase();
  
//   if (color === "red" || color === "blue" || color === "green" || color === "black" || color === "white") {
//     document.body.style.backgroundColor = color;
//   } else {
//     alert("Invalid color entered!");
//   }
// };

// #3
// function calculateAverage() {
//     let input = document.getElementById("numbers").value;
//     let numbers = input.split(":");
    
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += parseInt(numbers[i]);
//     }
    
//     let average = sum / numbers.length;
    
//     document.getElementById("result").innerHTML = "Average: " + average;
//   }