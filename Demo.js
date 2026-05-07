// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const user = {name: "Arnav", age: 20, hobby: "Coding"};

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 == 0) {
//         console.log(arr[i], "is even.");
//     }
// }


// arr.forEach((i, idx)=> {
//     arr[idx] = i + 10;
//     });


// for(let i in arr) {
//     arr[i] = arr[i] + 10;
// }


// for(const index in user) {
//     console.log(index, ":", user[index]);
// }


// for(const item of arr) {
//     console.log(item);
// }

const number = [1, 2, 3];
const newnumber = number.map(function(n){
    return n*2;
})

console.log(newnumber);

const newnum = number.filter((n)=>n%2 == 0);

const n = [...number, 5];

