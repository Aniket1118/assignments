// assignment-2
// write a function to check if 2 string are anagrams

// anagram = string made from same letters eg - "elbow" and "below"

function anagram(string1,string2) {
    let a = string1.length
    let b = string2.length
    if(a!==b){
    alert("wrong input")
    return
    }
    let x = string1.split('').sort().join()
    let y =  string2.split('').sort().join()
    if(x==y){
    alert("this is an anagram")
    }
    else{
    alert("this is not boss")
    }
    
    }
    
    anagram("nandini","indiann")
    

