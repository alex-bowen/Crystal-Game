# unit-4-game

This version of the Crystal(s) Collector game was created by Alex Bowen (github.com/alex-bowen). 

This project uses jQuery and JavaScript to create a game similar to _blackjack_. Here's how the game works: 


  The player is given a *random number* (randomGoal) at the start of the game.
        var randomGoal;
        
        
        function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
        }

        randomGoal = getRandomInt(19, 120);
        $("#goalNumber").text(randomGoal);

  There are four crystals on the page. By *clicking* on a crystal, the player *adds a specific amount of points to the total score*.

  The player wins game by *matching* the total score to the random number. The player loses if the total score is *greater than* the random number.

  The value of each crystal is hidden until it is clicked. Then, it is added to the total score.

  Each time the game restarts, a new random number is generated, and the value of each crystal is changed.
