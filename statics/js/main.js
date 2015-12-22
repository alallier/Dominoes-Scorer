// a sample progressive enhancement
document.body.style.backgroundColor = '#eee';

// Create the number of players select box for quickPlay and arcadePlay
///
var select = document.createElement('select'),
    quickPlayForm = document.forms['quickPlay'],
    arcadePlayForm = document.forms['arcadePlay'],
    option,
    playerArray = [
      {value: '2', text: '2'},
      {value: '3', text: '3'},
      {value: '4', text: '4'},
      {value: '5', text: '5'},
      {value: '6', text: '6'},
      {value: '7', text: '7'},
      {value: '8', text: '8'},
      {value: '9', text: '9'},
      {value: '10', text: '10'}
    ],
    i = 0;
    playerArrayLength = playerArray.length,
    selectName = 'numberOfPlayers';

// Dynamically build select box from playerArray
for (; i < playerArrayLength; i += 1) {
  option = document.createElement('option');
  option.setAttribute('value', playerArray[i].value);
  option.appendChild(document.createTextNode(playerArray[i].text));
  select.appendChild(option);
}

// Set the select size to 9 so it shows all the player options
select.setAttribute('size', 9);
select.setAttribute('name', selectName);

// Append to both forms in quickPlay.html and ArcadePlayMode.html
// Checking to see if the divs exists because if you're not on the page they return null
if (quickPlayForm) {
  quickPlayForm.appendChild(select);
}
if (arcadePlayForm) {
  arcadePlayForm.appendChild(select);
}
///

// Table code
///

//This if check is temporary fix, it needs a better solution
if (window.location.href === "http://localhost:43711/getPlayersNames") {
  var nubmerOfPlayers = document.getElementById('nubmerOfPlayers').value;

  // Add event listeners to all input elements
  for (i = 0; i <= 9; i++) {
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
      for (i = 0; i <= 9; i++) {

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
}
///
