let apoorv=542542;
//console.log(apoorv);
let myDate=new Date ();
//console.log(myDate.toLocaleDateString())
let mysym = Symbol("key1");

let a = {
    name: "apoorv",
    age: 18,
    [mysym]: "key1"
};

//console.log(typeof mysym);  // "symbol"
//console.log(a[mysym]);  // Outputs: "key1"
function abd(){
    let username="apoorv";
    //console.log(username ,"hii");
}
abd();
// const chai=()=>{
//     let username= "hitesh";
//     console.log(username);
// }
// chai();
const add = (num1, num2) => {
    return num1 + num2;
};

console.log(add(12, 12)); // 24
let sub=(a1,a2)=>{
    return a1-a2;
}
let ans=sub(12 , 10);
console.log(ans);
