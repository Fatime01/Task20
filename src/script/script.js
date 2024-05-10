let arr = [8, 6, 9, 5, 10, 19]
let min = arr[0]
let max = arr[0]

for (let i = 1; i <= arr.length-1; i++) {
    let num = arr[i]
  if (num % 2 != 0) {
    console.log(++num);
  } else {
    console.log(num);
  }

  
  if (num % 2 == 0) {
    console.log(num * arr[0]);
  } else {
    let lastElement = arr[arr.length-1]
    console.log(num * lastElement);
  }
  

if (num > max) {
    max = arr[i]
}
else if (num < min) {
    min = arr[i] 
}
}

console.log(arr);
console.log(min, max);