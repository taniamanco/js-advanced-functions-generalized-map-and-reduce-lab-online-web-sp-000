function map(arr, callback) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    let newEl = arr[i]; 
    newArr.push(callback(newEl));
  }
  return newArr; 
}

function reduce(arr, callback, startPoint=0){
  let memo = typeof startPoint != "undefined" ? startPoint : 0;
  
  for(let i = 0; i < arr.length; i++) {
      memo = callback(arr[i], memo);
  }  
  return memo;
}
