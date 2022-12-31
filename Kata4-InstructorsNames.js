const instructorWithLongestName = function(instructors) {
  let currentLongest = 0;
  let currentNameCount = 0;
  let result;
  for(let instructor of instructors){
    currentNameCount = instructor.name.length;
    if(currentNameCount > currentLongest){
      currentLongest = currentNameCount;
      result = instructor;
    }
  }
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));