var hamlets = [
  "Laurence Olivier, 1948",
  "Grigori Kozintsev, 1964",
  "Tony Richardson, 1969",
  "Franco Zeffirelli, 1990",
  "Kenneth Branagh, 1996",
  "Michael Almereyda, 2000"
];

console.log("Scene I ---------------------------");
hamlets.forEach(function(hamlet){
  var splitHamlet = hamlet.split(", ");
  console.log(`O! the venerable ${splitHamlet[0]} starred as Hamlet in ${splitHamlet[1]}`);
});

console.log("Scene II ---------------------------");
var hamletArrays = hamlets.map(function(hamlet){
  var splitHamlet = hamlet.split(", ");
  splitHamlet[1] = parseInt(splitHamlet[1]);
  return splitHamlet;
});
console.log(hamletArrays);

console.log("Scene III ---------------------------");
var hamletObjects = hamlets.map(function(hamlet){
  var splitHamlet = hamlet.split(", ");
  return {
    name: splitHamlet[0],
    year: splitHamlet[1],
  };
});
console.log(hamletObjects);

console.log("Scene IV ---------------------------");
var swingingHamlets = hamletObjects.filter(function(hamlet){
  return hamlet.year >= 1960 && hamlet.year < 1970;
});
console.log(swingingHamlets);

console.log("Scene V ---------------------------");
var futureHamlets = hamletObjects.filter(function(hamlet){
  return hamlet.year >= 2000
});
console.log(futureHamlets);