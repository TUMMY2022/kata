const urlEncode = function(text) {
  // Put your solution here
let charText = text.trim();
let newText=charText.split(" ").join("%20");
return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));