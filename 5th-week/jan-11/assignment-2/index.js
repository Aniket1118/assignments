//  var ani = parseInt(prompt("enter a number"))




//  var a =5
// for(i=1;i<=a;i++){
//     console.log("*".repeat(i))
// }

/*
4444
4444
4444
4444
*/



// var n=5;

// var str="";

// for(i=1;i<=n;i++){
 
//     for(j=1;j<=n;j++) {
//        str +=`${n}`;
//     }
//     str+="\n";
// }

// console.log(str);
var n = parseInt(prompt("enter the number"))
for (i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        document.write("* ")
    }
    document.write("<br>")
}