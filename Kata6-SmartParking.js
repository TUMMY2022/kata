
const whereCanIPark = function (spots, vehicle) {
  for (let col = 0; col < spots.length; col++) { 
    for (let row = 0; row <spots[col].length; row++) {
      if(vehicle ==='regular') {
        if (spots[col][row] ==='R') {
          return [row,col];
        }
      } else if(vehicle ==='small') {
        if (spots[col][row] ==='R' || spots[col][row] ==='S') {
          return [row,col];
        }
      } else if (vehicle ==='motorcycle') {
        if (spots[col][row] ==='R' || spots[col][row] ==='S' || spots[col][row] ==='M') {
          return [row,col];
        }
      } 
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    ['s', 's', 's', 'S', 'R', 'M'],
    ['s', 'M', 's', 'S', 'r', 'M'], 
    ['s', 'M', 's', 'S', 'r', 'm'], 
    ['S', 'r', 's', 'm', 'r', 'M'], 
    ['S', 'r', 's', 'm', 'r', 'M'], 
    ['S', 'r', 'S', 'M', 'M', 'S']  
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))