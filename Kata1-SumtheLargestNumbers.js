const sumLargestNumbers = function(data) {
  // Put your solution here
  let max1 = data[0];
  let max2 = data[1];
  if (data.length === 2){
    return max1 + max2 ;
  } else {
    if(max1 > max2) {
      max1 = data[0];
      max2 = data[1];
    } else {
      max1= data[1];
      max2= data[0];
    }
  
    for(let i = 2; i < data.length; i++){
      if(data[i] > max1) {
        max2 = max1;
        max1 = data[i];
      }
    }
    return max1 + max2;
  }
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));