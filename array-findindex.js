
let array1 = [5,12,4,6,14]

let found = array1.find(array=>{
  return array >10
});

console.log(found)


let array2 = [2,3,5,4,2,11,15]

function largerNumber(element){
  return element > 5
};

console.log(array2.findIndex(largerNumber)
