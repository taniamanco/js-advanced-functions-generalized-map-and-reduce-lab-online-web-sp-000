function map(arr, fun) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++){
    let newEl = arr[i]; 
    newArr.push(fun(newEl));
  }
  return newArr; 
}

function reduce(arr, fun, startPoint){
   let reducer = (accumulator, currentValue) => accumulator + currentValue
   
   for(let i = 0; i < arr.length; i++){
     arr.reduce(reducer, startPoint);
   }
}