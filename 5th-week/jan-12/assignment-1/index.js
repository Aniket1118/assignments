// // alert("jai ho shankara")
// let displayElem = document.querySelector('.para');
// let  adderElem  = document.querySelector('.addlikes');
// let minusElem = document.querySelector('.minuslikes');
// let count = 0;

// adderElem.addEventListener("click",myFunction);


// function myFunction() {
//   count++;
//     displayElem.innerHTML = count;
    
// }
// minusElem.addEventListener("click",myFunction2);

// function myFunction2() {
//     count--;
//     displayElem.innerHTML = count; 
// }

let displayElem = document.querySelector('.para')
let liker = document.querySelector('.addlikes')
let disliker = document.querySelector('.minuslikes')
let count = 0;

liker.addEventListener("click",myFunction)
disliker.addEventListener("click",myFunction2)


function myFunction(){
    count++;
    displayElem.innerHTML = count;
}
function myFunction2(){
    count--;
    displayElem.innerHTML = count;
}