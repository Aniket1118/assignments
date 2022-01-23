// assignment-1
// ''' function manipulateArray(array, callback) {

// } '''

// you have to write the functionality of maniputlateArray function such that i can pass mulBy4, add9

// function manipulateArray(array, functionality) {
//   var result = [];
//   for (let i = 0; i < array.length; i++) {
//     var y = functionality(array[i]);
//     result.push(y);
//   }
//   return result;
// }


function manipulateArray(array,mulB4,ad9) {
  var  a =  mulB4(array);
    var b = ad9(array);
var obj  = {
    first : a,
    scnd : b
}
return obj

}



function mulBy4(array){
    var result = [];
    for(let i=0;i<array.length;i++) {
        var a = array[i]*4

        result.push(a)
    }
return result;
};

 



function add9(array) {
    var result = [];
    for (i=0;i<array.length;i++) {
        var y = array[i] + 9
        result.push(y)
    }
    return result;
}



var masi = [2,4,6,8,10]
var riyan = manipulateArray(masi,mulBy4,add9)
document.write(riyan.first)
// alert("hiiiiiii")

// function higherOrderFunc(x, callback1, callback2) {
//   callback1(x);
//   callback2(x);
// }

// var mulBy2 = function (n) {
//   return n * 2;
// };

// function add2(n) {
//   return n + 2;
// }

// var x = 4;
// var geek1 = higherOrderFunc(3, mulBy2, add2);




















