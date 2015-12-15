// a sample progressive enhancement
document.body.style.backgroundColor = '#eee';

// Create the number of players select box for quickPlay and arcadePlay
var select = document.createElement('select'),
		quickPlayDiv = document.getElementById('quickPlay'),
		arcadePlayDiv = document.getElementById('arcadePlay'),
    option,
		playerArray = [
			{value: "2", text: "2"},
			{value: "3", text: "3"},
			{value: "4", text: "4"},
			{value: "5", text: "5"},
			{value: "6", text: "6"},
			{value: "7", text: "7"},
			{value: "8", text: "8"},
			{value: "9", text: "9"},
			{value: "10", text: "10"}
		],
		i = 0;
		il = playerArray.length;

// Dynamically build select box from playerArray
for (; i < il; i += 1) {
    option = document.createElement('option');
    option.setAttribute('value', playerArray[i].value);
    option.appendChild(document.createTextNode(playerArray[i].text));
    select.appendChild(option);
}

// Set the select size to 9 so it shows all the player options
select.setAttribute("size", 9);

// Append to both quickPlay.html and ArcadePlayMode.html
// Checking to see if the divs exists because if you're not on the page they return null
if (quickPlayDiv) {
	quickPlayDiv.appendChild(select);
}
if (arcadePlayDiv) {
	arcadePlayDiv.appendChild(select);
}