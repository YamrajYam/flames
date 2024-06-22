const readlineSync = require('readline-sync');

let str11 = readlineSync.question('Enter Your Name: ');
let str22 = readlineSync.question("Enter Your Partner's Name: ");
let newName = str11 + str22;
let str1 = str11.toLowerCase()
let str2 = str22.toLowerCase()

let  tnum = newName.length

function commonCharCount(str1, str2) {
    let count = 0;
    const arr1 = str1.split('');
    const arr2 = str2.split('');
 
    for (let i = 0; i < arr1.length; i++) {
       const char = arr1[i];
       const index = arr2.indexOf(char);
 
       if (index !== -1) {
          arr2.splice(index, 1);
          count++;
       }
    }
 
    return count;
 }

let cnum = commonCharCount(str1, str2)


let str = "FLAMES"
let rnum = tnum-cnum
let r_num = rnum%6
let r1_num = r_num - 1
if (r1_num==0){
    console.log("You got F")
    console.log("Yay, friends!")
}
if (r1_num==1){
    console.log("You got L")
    console.log("Wow, lovers!")
}
if (r1_num==2){
    console.log("You got A")
    console.log("Aww, affectionate!")
}
if (r1_num==3){
    console.log("You got M")
    console.log("Congratulations on marriage!")
}
if (r1_num==4){
    console.log("You got E")
    console.log("Oh no, enemies!")
}
if (r1_num==5 || r1_num == -1){
    console.log("You got S")
    console.log("Oops, siblings!")
}