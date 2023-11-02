// v1.3.4

let words = ["3", "86"]
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

secondKeyboard();

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
			case 38:
				/*UP*/
				moveUp();
				moveCount++;
				moves.push("U");
				break;
			case 39:
				/*RIGHT*/
				moveRight();
				moveCount++;
				moves.push("R");
				break;
			case 40:
				/*DOWN*/
				moveDown();
				moveCount++;
				moves.push("D");
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
			// console.log("Move Alphabets: " + moveAlphabets);
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

function moveUp() {
};

function moveDown() {
};

function moveLeft() {
	oldSelection = selection;
	selection--;
	if (selection == -1) {
		selection = 27;
		oldSelection = 0;
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
	focus();
};

function select() {
	animation();
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

function secondKeyboard() {
}

function checkinLetters(input) {
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
}

function startTest() {
	document.getElementById("curtain").classList.remove("d-none");
	start = 1;
	console.log(start);
}
