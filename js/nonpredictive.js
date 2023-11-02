// v1.5.2

let words = ["UNWELL", "ABTALKS", "ALIVE", "ANNEFRANK  PARALLEL STORIES", "BLACKAF", "CATS THE MEWVIE"]
var input
var selectedSegments = []
var selectedCharacters = []
var after_

let selection = 1;
let oldSelection = 0;

let keyboard = 0;
let predSel = 1;

var lastLetter = "";
var lastLetterPos;

var start = 0;

let inputText = document.getElementById("inputText");

// let buffer = ""

let secondDefault = ["N", "R", "T", "L", "S", "M", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var predKeys = ["N", "R", "T", "L", "S", "M"];

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alphabetCount = alphabets.length;
let pred = [
	[" "],
	["N", "R", "T", "L", "S", "M"],
	["E", "O", "A", "L", "R", "I"],
	["H", "O", "A", "E", "K", "I"],
	["E", "A", "O", "I", "S", "R"],
	["R", "N", "S", "A", "L", "D"],
	["O", "I", "E", "A", "R", "L"],
	["E", "A", "I", "H", "O", "R"],
	["E", "O", "A", "I", "T", "U"],
	["N", "T", "S", "L", "E", "R"],
	["O", "E", "A", "U", "I", "J"],
	["I", "E", "A", "S", "O", "Y"],
	["E", "A", "I", "L", "O", "D"],
	["A", "E", "O", "I", "Y", "U"],
	["D", "G", "E", "T", "A", "I"],
	["N", "R", "F", "U", "M", "L"],
	["E", "A", "R", "O", "I", "L"],
	["U", "I", "A", "B", "Q", "R"],
	["R", "I", "A", "O", "S", "T"],
	["T", "E", "H", "I", "S", "O"],
	["H", "E", "O", "I", "A", "R"],
	["N", "R", "S", "E", "T", "L"],
	["E", "I", "A", "O", "S", "Y"],
	["I", "A", "E", "O", "H", "N"],
	["T", "P", "I", "A", "E", "O"],
	["O", "S", "E", "A", "T", "N"],
	["A", "E", "I", "O", "U", "Z"]
];

// secondKeyboard();

// parameters
var moveCount = 0; // integer LURD
var totalClicks = 0; // intger LURDS
var moves = []; // array LURDS
var moveAlphabets = []; // array alphabets
var moveTime = []; // array timestamps
var totalTime = 0; // integer

correction();

document.onkeydown = function(e) {
	if (start == 1) {
		moveTime.push(Date.now());
		// sleep(50);
		switch (e.keyCode) {
			case 13:
				/*ENTER*/
				select();
				totalClicks++;
				moves.push("S");
				break;
			case 16:
				/*SHIFT*/
				select();
				totalClicks++;
				moves.push("S");
				break;
			case 32:
				/*SPACE*/
				select();
				totalClicks++;
				moves.push("S");
				break;
			case 37:
				/*LEFT*/
				moveLeft();
				moveCount++;
				moves.push("L");
				break;
			case 39:
				/*RIGHT*/
				moveRight();
				moveCount++;
				moves.push("R");
				break;
			case 227:
				window.open("", "_self").close();
				break;
			case 228:
				startTest();
				break;
			default:
				break;
		};
		moveAlphabets.push(document.getElementById(selection).innerHTML);
		if (document.getElementById("inputText").innerText == "TIME TO GO SHOPPING") {
			window.alert("finish!");
			console.log("Move Count: " + moveCount);
			totalClicks += moveCount;
			console.log("Total Clicks: " + totalClicks);
			console.log("Moves: " + moves);
			console.log("Move Alphabets: " + moveAlphabets);
			totalTime = moveTime.length;
			totalTime = moveTime[totalTime - 1] - moveTime[0];
			console.log("Total Time: " + totalTime);
			console.log("Move Times: " + moveTime);
		}
		correction();
	} else {
		switch (e.keyCode) {
			case 227:
				window.open("", "_self").close();
				break;
			case 228:
				startTest();
				break;
			default:
				break;
		};
	}
};

function focus() {
	document.getElementById(oldSelection).classList.replace("text-bg-white", "text-bg-dark");
	document.getElementById(oldSelection).classList.toggle("fw-bold");
	document.getElementById(selection).classList.replace("text-bg-dark", "text-bg-white");
	document.getElementById(selection).classList.toggle("fw-bold");
}

function moveLeft() {
	oldSelection = selection;
	selection--;
	if (selection == -1) {
		selection = 27;
		oldSelection = 0;
	}
	if (selection == 100) {
		selection = 107;
		oldSelection = 101;
	}
	focus();
};

function moveRight() {
	oldSelection = selection;
	selection++;
	if (selection == 28) {
		selection = 0;
		oldSelection = 27;
	}
	if (selection == 108) {
		selection = 101;
		oldSelection = 107;
	}
	focus();
};

function select() {
	animation();
	if (selection > 100) {
		if (selection == 107) {
			str = inputText.innerText
			str = str.substring(0, str.length - 1);
			inputText.innerText = str;
			secondKeyboard();
		} else {
			inputText.innerText += predKeys[selection - 101];
			secondKeyboard();
		}
	} else {
		if (selection == 0) {
			inputText.innerText += " ";
			secondKeyboard();
		} else if (selection == 27) {
			str = inputText.innerText
			str = str.substring(0, str.length - 1);
			inputText.innerText = str;
			secondKeyboard();
		} else {
			inputText.innerText += alphabets[selection - 1];
			secondKeyboard();
		}
	}
}

function secondKeyboard() {
	// if (keyboard == 0) {
	// 	predKeys = pred[selection].slice();	
	// } else if (keyboard == 1) {
	// 	lastLetter = inputText.innerText.slice(-1);
	// 	for (let f = 0; f < 26; f++) {
	// 		if (lastLetter == alphabets[f]) {
	// 			lastLetterPos = f+1;
	// 		}
	// 	}
	// 	predKeys = pred[lastLetterPos].slice();
	// 	oldSelection = selection;
	// 	selection = 101;
	// 	focus();
	// }
	if (inputText.innerText) {
		checkinLetters(inputText.innerText)
		predKeys = selectedCharacters.slice();
	}
	for (let k = 101; k < 107; k++) {
		document.getElementById(k).innerText = predKeys[k - 101];
	}
}

function checkinLetters(input) {
	//console.log(input)
	selectedSegments = []
	selectedCharacters = []

	for (let i = 0; i < words.length; i++) {
		if (words[i].includes(input)) {
			after_ = words[i].split(input)[1]
			selectedSegments.push(after_)
		}
	}

	// console.log(selectedSegments)

	for (let i = 0; i < selectedSegments.length; i++) {
		if (selectedSegments[i].charAt(0) == " ") {
			selectedCharacters.push(selectedSegments[i].charAt(1))
		} else if (selectedSegments[i].charAt(0) == "") {

		} else {
			selectedCharacters.push(selectedSegments[i].charAt(0))
		}
	}

	// console.log(selectedCharacters)

	selectedCharacters = sortByFrequencyAndRemoveDuplicates(selectedCharacters)

	if (selectedCharacters.length < 6) {
		for (let i = 0; i < pred[1].length; i++) {
			selectedCharacters.indexOf(pred[1][i]) === -1 ? selectedCharacters.push(pred[1][i]) : console.log("This item already exists");
			// selectedCharacters = selectedCharacters.concat(predA)
		}
	}

	//console.log(selectedCharacters)

	// console.log(selectedCharacters[0],selectedCharacters[1],selectedCharacters[2],selectedCharacters[3],selectedCharacters[4],selectedCharacters[5]);

}

function animation() {
	var selected = document.getElementById(selection);
	selected.classList.add("animate");
	setTimeout(() => {
		selected.classList.remove("animate");
	}, 250);
}

function correction() {
	if (!CSS.supports('selector(html:has(body))')) {
		if (!document.getElementById(0).classList.contains("text-bg-white")) {
			document.getElementById(0).classList.replace("text-bg-dark", "text-bg-primary");
		}
		if (selection == 0) {
			document.getElementById(0).classList.replace("text-bg-primary", "text-bg-white");
		}
		if (!document.getElementById(27).classList.contains("text-bg-white")) {
			document.getElementById(27).classList.replace("text-bg-dark", "text-bg-primary");
		}
		if (selection == 27) {
			document.getElementById(27).classList.replace("text-bg-primary", "text-bg-white");
		}
		if (!document.getElementById(107).classList.contains("text-bg-white")) {
			document.getElementById(107).classList.replace("text-bg-dark", "text-bg-primary");
		}
		if (selection == 107) {
			document.getElementById(107).classList.replace("text-bg-primary", "text-bg-white");
		}
	}
};

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}

function sortByFrequencyAndRemoveDuplicates(array) {
	var frequency = {},
		value;

	// compute frequencies of each value
	for (var i = 0; i < array.length; i++) {
		value = array[i];
		if (value in frequency) {
			frequency[value]++;
		} else {
			frequency[value] = 1;
		}
	}

	// make array from the frequency object to de-duplicate
	var uniques = [];
	for (value in frequency) {
		uniques.push(value);
	}

	// sort the uniques array in descending order by frequency
	function compareFrequency(a, b) {
		return frequency[b] - frequency[a];
	}

	return uniques.sort(compareFrequency);
}

function startTest() {
	document.getElementById("curtain").classList.remove("d-none");
	start = 1;
	console.log(start);
}
