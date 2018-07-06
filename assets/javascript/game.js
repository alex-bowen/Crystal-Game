// Thanks for looking! 

$(document).ready(function () {
    console.log("ready!");

    // beginning stats
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    // number to aim toward
    var randomGoal;

    // gem values
    var crystalValue1;
    var crystalValue2;
    var crystalValue3;
    var crystalValue4;

    
    // reset function -- resets stats and generates random numbers all around
    function resetGame() {
        totalScore = 0;
        $("#total-score").html(totalScore);
        randomGoal = getRandomInt(19, 120);
        $("#goalNumber").text(randomGoal);
        crystalValue1 = getRandomInt(1, 12);
        crystalValue2 = getRandomInt(1, 12);
        crystalValue3 = getRandomInt(1, 12);
        crystalValue4 = getRandomInt(1, 12);

        console.log("Crystal one: " + crystalValue1);
        console.log("Crystal two: " + crystalValue2);
        console.log("Crystal three: " + crystalValue3);
        console.log("Crystal four: " + crystalValue4);

    }

    // Generates random number for user to try to guess/add up to with buttons.
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    randomGoal = getRandomInt(19, 120);
    $("#goalNumber").text(randomGoal);


    // Generates random numbers and assign them to gems
    crystalValue1 = getRandomInt(1, 12);
    crystalValue2 = getRandomInt(1, 12);
    crystalValue3 = getRandomInt(1, 12);
    crystalValue4 = getRandomInt(1, 12);

    console.log("Crystal one: " + crystalValue1);
    console.log("Crystal two: " + crystalValue2);
    console.log("Crystal three: " + crystalValue3);
    console.log("Crystal four: " + crystalValue4);


    // Keeps track of wins and losses
    function tally() {
        if (totalScore === randomGoal) {
            wins++;
            console.log("Wins: " + wins);
            console.log("Losses: " + losses);
            // change html
            $("#wins-tally").text("Wins: " + wins);
            $("#exclamation").html("You win!");

            resetGame();




        } else if (totalScore > randomGoal) {
            losses++;
            console.log("Wins: " + wins);
            console.log("Losses: " + losses);
            // change html
            $("#losses-tally").text("Losses: " + losses);
            $("#exclamation").text("You lose!");

            resetGame();
            

        }
    }


    // Pushes value of crystals to total score when clicked, 
    $("#gem1").click(function () {
        $("#total-score").html(totalScore + crystalValue1);
        // Adds value of clicked gem to total score
        totalScore = totalScore + crystalValue1;
        tally();
    })

    $("#gem2").click(function () {
        $("#total-score").html(totalScore + crystalValue2);
        totalScore = totalScore + crystalValue2;
        tally();

    })

    $("#gem3").click(function () {
        $("#total-score").html(totalScore + crystalValue3);
        totalScore = totalScore + crystalValue3;
        tally();

    })

    $("#gem4").click(function () {
        $("#total-score").html(totalScore + crystalValue4);
        totalScore = totalScore + crystalValue4;
        tally();

    })

});


