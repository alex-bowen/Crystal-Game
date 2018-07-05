$( document ).ready(function() {
    console.log( "ready!" );



var totalScore = 0;
var wins = 0;
var losses = 0;

// Generate random number for user to try to guess/add up to with buttons.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

var randomGoal = getRandomInt(19, 120);
$("#goalNumber").text(randomGoal);

// Generate random numbers and assign them to gems.

    var crystalValue1 = getRandomInt(1, 12);
    var crystalValue2 = getRandomInt(1, 12);
    var crystalValue3 = getRandomInt(1, 12);
    var crystalValue4 = getRandomInt(1, 12);
    
    console.log("Crystal one: " + crystalValue1);
    console.log("Crystal two: " + crystalValue2);
    console.log("Crystal three: " + crystalValue3);
    console.log("Crystal four: " + crystalValue4);

// Push value of crystals to total score when clicked, 

$("#gem1").click(function() {
    $("#total-score").html(totalScore + crystalValue1);
    // Adds value of clicked gem to total score
    totalScore = totalScore + crystalValue1;
})

$("#gem2").click(function() {
    $("#total-score").html(totalScore + crystalValue2);
    totalScore = totalScore + crystalValue2;
})

$("#gem3").click(function() {
    $("#total-score").html(totalScore + crystalValue3);
    totalScore = totalScore + crystalValue3;
})

$("#gem4").click(function() {
    $("#total-score").html(totalScore + crystalValue4);
    totalScore = totalScore + crystalValue4;
})


// Push to wins/losses html under conditions

if (totalScore === randomGoal) {
    wins++;

} else if (totalScore > randomGoal) {
    losses++;

}

console.log("Wins: " + wins);
console.log("Losses: " + losses);


// Restarts, generates random numbers all around





});

