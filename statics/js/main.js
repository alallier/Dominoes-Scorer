// a sample progressive enhancement
document.body.style.backgroundColor = '#eee';

// Table code
///

// Automatic Scoring Below
//This if check is temporary fix, it needs a better solution
if (window.location.pathname === '/getPlayersNames') {
  // Event listener to listen all clicks on the page. (Right now handling hideScore and submitRound checkboxes).
  document.addEventListener('click', function (e) {
    var checkingHideScore = '',
        checkingFinal = '',
        checkingSubmit = '';

    // Split the target element so we can check to see what was clicked.
    hideScoreSplit = e.target.id.split('');

    // Check to see if hide score check box before going any further. NOTE this is all dependent on id of elements on screen, so be very careful when changing ids in the HTML.
    for (i = 0; i < 4; i++) {
      checkingHideScore += hideScoreSplit[i];
    }

    // Check to see if final score check box before going any further
    for (i = 0; i < 5; i++) {
      checkingFinal += hideScoreSplit[i];
    }

    // Check to see if submit round check box before going any further
    for (i = 0; i < 6; i++) {
      checkingSubmit += hideScoreSplit[i];
    }

    // Check if the click action was on the submit round.
    if (checkingSubmit === 'submit') {

      // Get the round number from the split.
      round = hideScoreSplit[11];

      // Clicking a checkbox that is unchecked.
      if (e.target.value === 'false') {
        for (j = 0; j < nubmerOfPlayers; j++) {

          // Dynamically populate the oldParagraphName and newParagraphName.
          textBoxName = 'player' + j + 'Round' + round;

          // Get the score input box
          textBox = document.getElementById(textBoxName);

          // Disable the input field for the score and set the checkbox to true (checked).
          textBox.disabled = true;
          e.target.setAttribute('value', 'true');
        }
      }
      else {
        for (j = 0; j < nubmerOfPlayers; j++) {
          
          // Dynamically populate the oldParagraphName and newParagraphName.
          textBoxName = 'player' + j + 'Round' + round;

          // Get the score input box
          textBox = document.getElementById(textBoxName);

          // Enable the input field for the score and set the checkbox to false (unchecked).
          textBox.disabled = false;
          e.target.setAttribute('value', 'false');
        }
      }
    }

    // Check if the click action was in the final score round.
    if (checkingFinal === 'final') {

      // Clicking a checkbox that is unchecked.
      if (e.target.value === 'false') {
        for (j = 0; j < nubmerOfPlayers; j++) {

          // Dynamically populate the oldParagraphName and newParagraphName.
          oldParagraphName = 'finalScorePlayer' + j;
          newParagraphName = 'finalScorePlayer' + j + 'paragraph';

          // Get the score paragraph and parent
          oldParagraph = document.getElementById(oldParagraphName);
          oldParagraphParentNode = document.getElementById(oldParagraphName).parentNode;

          // Hide the score paragraph and set the check box value to true (checked). 
          oldParagraph.style.display = 'none';
          e.target.setAttribute('value', 'true');

          // Create a paragrpah to hold hidden and give it unquie dynamically created id made from above.
          paragraph = document.createElement('p');
          paragraph.setAttribute('id', newParagraphName);

          // Creat a text node and give it the value of hidden.
          node = document.createTextNode('Hidden');

          // Append the node containing hidden to the new paragraph and append that paragraph to the textbox parent (which is the table data tag. Thus replacing the final score paragraph with the words hidden).
          paragraph.appendChild(node);
          oldParagraphParentNode.appendChild(paragraph);
        }
      }
      else {

        // Clicking a checkbox that is checked already.
        for (j = 0; j < nubmerOfPlayers; j++) {

          // Dynamically populate the oldParagraphName and newParagraphName.
          oldParagraphName = 'finalScorePlayer' + j;
          newParagraphName = 'finalScorePlayer' + j + 'paragraph';

          // Get the old paragraph, new paragraph, and the parent of both input element and parent.
          oldParagraph = document.getElementById(oldParagraphName);
          paragraph = document.getElementById(newParagraphName);
          oldParagraphParentNode = document.getElementById(oldParagraphName).parentNode;

          // Unhide the score paragraph and set the check box value to false (unchecked).
          oldParagraph.style.display = 'inline';
          e.target.setAttribute('value', 'false');

          // Remove the paragraph containing hidden.
          oldParagraphParentNode.removeChild(paragraph);
        }
      }
    }

    // If we click a hideScore check box we process this below.
    if (checkingHideScore === 'hide') {

      // Get the round number from the split.
      round = hideScoreSplit[9];

      // Clicking a checkbox that is unchecked.
      if (e.target.value === 'false') {
        for (j = 0; j < nubmerOfPlayers; j++) {

          // Dynamically populate the textBoxName and paragraphName.
          textBoxName = 'player' + j + 'Round' + round;
          paragraphName = 'paragrapghPlayer' + j + 'Round' + round;

          // Get the text box input element and parent
          textBox = document.getElementById(textBoxName);
          textBoxParentNode = document.getElementById(textBoxName).parentNode;

          // Set the input type to hidden and it's value to true. Thus hiding the input box and setting the check box value to true (checked state).
          textBox.setAttribute('type', 'hidden');
          e.target.setAttribute('value', 'true');

          // Create a paragrpah to hold hidden and give it unquie dynamically created id made from above.
          paragraph = document.createElement('p');
          paragraph.setAttribute('id', paragraphName);

          // Creat a text node and give it the value of hidden.
          node = document.createTextNode('Hidden');

          // Append the node containing hidden to the paragraph and append that paragraph to the textbox parent (which is the table data tag. Thus replacing the input box with the words hidden).
          paragraph.appendChild(node);
          textBoxParentNode.appendChild(paragraph);
        }
      }
      // Clicking a checkbox that is checked already.
      else {
        for (j = 0; j < nubmerOfPlayers; j++) {

          // Dynamically populate the textBoxName and paragraphName.
          textBoxName = 'player' + j + 'Round' + round;
          paragraphName = 'paragrapghPlayer' + j + 'Round' + round;

          // Get the text box input element, text box parent, and paragraph.
          textBox = document.getElementById(textBoxName);
          textBoxParentNode = document.getElementById(textBoxName).parentNode;
          console.log(textBoxParentNode);
          paragraph = document.getElementById(paragraphName);

          // Set the input type to text and it's value to false. Thus re-shwoing the input box and setting the check box value to false (unchecked state).
          textBox.setAttribute('type', 'text');
          e.target.setAttribute('value', 'false');

          // Remove the paragraph so only the text input remains.
          textBoxParentNode.removeChild(paragraph);
        }
      }
    }
  });
  
  var nubmerOfPlayers = document.getElementById('nubmerOfPlayers').value,
      dominoSetSize = document.getElementById('dominoSetSize').value;

  // Add event listeners to all text box input elements.
  
  // Loop through all rounds (dependent on dominoe set size).
  for (i = 0; i <= dominoSetSize; i++) {
    
    // Loop through number of players.
    for (j = 0; j < nubmerOfPlayers; j++) {
      
      // Add event listeners to text input boxes.
      textBoxName = 'player' + j + 'Round' + i;
      document.getElementById(textBoxName).addEventListener('input', sumValues);
    }
  }

  // Sum values of columns one a time, so to have seperate scores.
  function sumValues() {

    // Loop through number of players.
    for (j = 0; j < nubmerOfPlayers; j++) {

      // Reset total before going into each column.
      total = 0;
      
      // Loop through all rounds (dependent on dominoe set size).
      for (i = 0; i <= dominoSetSize; i++) {

        // Concatinate scoreTextElement before hand so we can loop through unique IDs.
        scoreTextElement = 'player' + j + 'Round' + i;

        // Get a value from each input down a column.
        value = Number(document.getElementById(scoreTextElement).value);

        total += value;

        // Get the finalScorePlayer element uniquly.
        finalScore = 'finalScorePlayer' + j;
        finalScore = document.getElementById(finalScore)

        // Empty finalScorePlayer element so we can rewrite it.
        finalScore.textContent = '';
        finalScore.innerHTML = '',

        // Append new total to finalScorePlayer.
        node = document.createTextNode(total);
        finalScore.appendChild(node);
      }
    }
  }
  
  // Ask the user before they close or refresh the page, so they don't lose their score.
  nodeEnv = document.getElementById('NODE_ENV').value;

  window.onbeforeunload = function() {
    // Check to see if we are in dev mode, if so turn off this feature so it doesn't constantly pop up and annoy us asking us if we want to leave the page and also hinder the auto reload.
    if (nodeEnv !== 'true') {
      return 'Refreshing the page will cause you to lose your score';
    }
  }
}
///
