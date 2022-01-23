// alert("namo namo ji shankara")
//DIAGONAL SUM OF THE MATRIX--
const outer = [
  [4, 3, 2, 4], // 0,0
  [9, 1, 5, 6], // 1,1
  [2, 7, 9, 8], // 2,2
  [8, 5, 2, 0], // 3,3
];

function diagonalSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {

     let inner = matrix[i];
  
    for (let j = 0; j < inner.length; j++) {

        if (i === j) {
           
       sum += matrix[i][j];
         }
    }
  }
  return sum;
  }
var ani = diagonalSum(outer)
console.log(ani)
