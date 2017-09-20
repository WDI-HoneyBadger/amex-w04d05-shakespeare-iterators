// Act I
function sep(symbol){
  if(!symbol){
    symbol = '-';
  }
  for(var i = 0; i < 6; i++){
    symbol += symbol
  }
  console.log(symbol)
}

var hamlets = [
  "Laurence Olivier, 1948",
  "Grigori Kozintsev, 1964",
  "Tony Richardson, 1969",
  "Franco Zeffirelli, 1990",
  "Kenneth Branagh, 1996",
  "Michael Almereyda, 2000"
];


console.log('ACT 1');
sep('=');

// Scene I
// Use .forEach to print out "O! the venerable [Actor] starred as Hamlet in [Year]"

hamlets.forEach(function(hamlet){
  var splitHamlet = hamlet.split(', ');
  console.log(`O! the venerable ${splitHamlet[0]} starred as Hamlet in ${splitHamlet[1]}`);
})
sep();



// Scene II
//Programatically convert the hamlets array into an array of arrays where the
//first element, name, is a string, and the second element, year, is an integer.

var hamletsArrs = hamlets.map(function(hamlet){
  var splitHamlet = hamlet.split(', ');
  splitHamlet[1] = parseInt(splitHamlet[1]);
  return splitHamlet;
})

console.log(hamletsArrs);
sep();


// Scene III
// Programatically convert the hamlets array of arrays into an array of objects
// where the keys are name and year

var hamletsObjs = hamletsArrs.map(function(hamlet){
  return {
    name: hamlet[0],
    year: hamlet[1]
  }
});

console.log(hamletsObjs);
sep();

// Scene IV
// Programatically select all the Hamlets from the 1960's and assign them to an
// array called swingin_hamlets

var swinginHamlets = hamletsObjs.filter(function(hamlet){
  return hamlet.year >= 1960 && hamlet.year < 1970;
})

console.log(swinginHamlets);
sep();


// Scene V
// Programatically select all the Hamlets from the 2000's and assign them to an
// array called future_hamlets

var futureHamlets = hamletsObjs.filter(function(hamlet){
  return hamlet.year >= 2000;
})

console.log(futureHamlets);
sep();


// Act II

var quotesArray = [
  ["To be, or not to be: that is the question", "Hamlet-(Act III,Scene I)."],
  ["A little more than kin, and less than kind", "Hamlet-(Act I,Scene II)."],
  ["And it must follow, as the night the day, thou canst not then be false to any man", "Hamlet-(Act I,Scene III)."],
  ["This is the very ecstasy of love", "Hamlet-(Act II,Scene I)."],
  ["Brevity is the soul of wit", "Hamlet-(Act II,Scene II)."],
  ["Do you think I am easier to be played on than a pipe?", "Hamlet-(Act III,Scene II)."],
  ["Doubt that the sun doth move, doubt truth to be a liar, but never doubt I love", "Hamlet-(Act II,Scene II)."],
  ["I will speak daggers to her, but use none", "Hamlet-(Act III,Scene II)."],
  ["In my mind's eye", "Hamlet-(Act I,Scene II)."],
  ["Neither a borrower nor a lender be; For loan oft loses both itself and friend, and borrowing dulls the edge of husbandry", "Hamlet-(Act I,Scene III)."],
  ["Rich gifts wax poor when givers prove unkind", "Hamlet-(Act III,Scene I)."],
  ["That it should come to this!", "Hamlet-(Act I,Scene II)."],
  ["The lady doth protest too much, methinks", "Hamlet-(Act III,Scene II)."],
  ["The plays the thing wherein I'll catch the conscience of the king", "Hamlet-(Act II,Scene II)."],
  ["There is nothing either good or bad, but thinking makes it so", "Hamlet-(Act II,Scene II)."],
  ["This above all: to thine own self be true", "Hamlet-(Act I,Scene III)."],
  ["Though this be madness, yet there is method int.", "Hamlet-(Act II,Scene II)."],
  ["What a piece of work is man! how noble in reason! how infinite in faculty! in form and moving how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world, the paragon of animals! ", "Hamlet-(Act II,Scene II)."],
  ["When sorrows come, they come not single spies, but in battalions", "Hamlet-(Act IV,Scene V)."]
];

// Scene I
// Convert the following quotes array into an array of objects. Each object
// should have the keys quote, play, act and scene

sep('=');
console.log('ACT 2');
sep('=');
// Jon's solution
// var quoteManager = [];
//
// quotesArray.forEach(function(element){
//  var quoteObject = {};
//  quoteObject.quote = element[0];
//  quoteObject.play = element[1].split("-")[0];
//  quoteObject.act = element[1].split(" ")[1].split(",")[0];
//  quoteObject.scene = element[1].split(" ")[2].split(")")[0];
//  quoteManager.push(quoteObject);
// })
// console.log(quoteManager);

//Glenn
// for(var i = 0; i < quotesArray.length; i++){
//
//  var quoteObj = {
//     quote: '',
//     play: '',
//     act: '',
//     scene: ''
//   };
//
//  quotes = quotesArray[i][0];
//
//  quoteObj.quote = quotes;
//
//  var newSplit = quotesArray[i][1].split('-');
//
//  quoteObj.play = newSplit[0];
//
//  var newerSplit = newSplit[1].split(',');
//
//  quoteObj.act = newerSplit[0];
//
//  quoteObj.scene = newerSplit[1];
//
//  console.log(quoteObj);
//
// }

//Daniel
var quoteObjArr = quotesArray.map(function(quote) {
  var quoteObj = {};
  quoteObj.quote = quote[0];
  quoteObj.play = quote[1].split('-', 1)[0];
  var actScene = quote[1].split('Act ')
  actScene = actScene[1].split(',');
  quoteObj.act = actScene[0];
  quoteObj.scene = actScene[1].split('Scene ')[1].split(')')[0];
  return quoteObj;
});
console.log(quoteObjArr);


//
// var quotesObjs =
//
// console.log(quotesObjs);
