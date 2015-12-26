// a sample progressive enhancement
document.body.style.backgroundColor = '#eee';

// Table code
///

// Automatic Scoring Below
//This if check is temporary fix, it needs a better solution
if (window.location.href === "http://localhost:43711/getPlayersNames") {
  var nubmerOfPlayers = document.getElementById('nubmerOfPlayers').value,
      dominoSetSize = document.getElementById('dominoSetSize').value;

  // Add event listeners to all input elements
  for (i = 0; i <= dominoSetSize; i++) {
    for (j = 0; j < nubmerOfPlayers; j++) {
      test = ['player' + j + 'Round' + i];
      if (test) {
        test = document.getElementById(test).addEventListener('input', sumValues);
      }
    }
  }

  // Sum values of columns one a time, so to have seperate scores
  function sumValues() {

    // Nested for loops to go through the players and 10 rounds for each player
    for (j = 0; j < nubmerOfPlayers; j++) {

      // Reset total before going into each column
      total = 0;
      for (i = 0; i <= dominoSetSize; i++) {

        // Concatinate scoreTextElement before hand so we can loop through unique IDs
        scoreTextElement = ['player' + j + 'Round' + i];

        // Get a value from each input down a column
        value = Number(document.getElementById(scoreTextElement).value);

        total += value;

        // Get the finalScorePlayer element uniquly
        finalScore = ['finalScorePlayer' + j];
        finalScore = document.getElementById(finalScore)

        // Empty finalScorePlayer element so we can rewrite it
        finalScore.textContent = '';
        finalScore.innerHTML = '',

        // Append new total to finalScorePlayer
        node = document.createTextNode(total);
        finalScore.appendChild(node);
      }
    }
  }
  
  // Ask the user before they close or refresh the page, so they don't lose their score
  nodeEnv = document.getElementById('NODE_ENV').value;

  window.onbeforeunload = function() {
    // Check to see if we are in dev mode, if so turn off this feature so it doesn't constantly pop up and annoy us asking us if we want to leave the page and also hinder the auto reload.
    if (nodeEnv !== 'true') {
      return 'Refreshing the page will cause you to lose your score';
    }
  }
}
///
