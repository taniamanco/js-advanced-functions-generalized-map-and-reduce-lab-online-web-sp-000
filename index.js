function map(arr, fun) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++){
    let newEl = arr[i]; 
    newArr.push(fun(newEl));
  }
  return newArr; 
}