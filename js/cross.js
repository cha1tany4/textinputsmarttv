let a, b;
// $ - backspace
// & - space
let col = ["a", "b", "c", "d", "e", "f", "g", "$", "h", "i", "j", "k", "l", "m", "&"];
let colCount = col.length;
let row = ["n", "o", "p", "q", "r", "s", "t", "$", "u", "v", "w", "x", "y", "z", "&"];
let rowCount = row.length;
let state = 0; // 0 for Col, 1 for Row
let str;

let maths;

var start = 0;

let selection = 7;
let oldSelection = 6;

var e107 = document.getElementById(107)
var e7 = document.getElementById(7)

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
		if (document.getElementById("inputText").innerText == "THE WITCHER") {
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
		moveCount = 0; // integer LURD
		totalClicks = 0; // intger LURDS
		moves = []; // array LURDS
		moveAlphabets = []; // array alphabets
		moveTime = []; // array timestamps
		totalTime = 0;
	}
};

function moveUp() {
	if (state == 1) {
		state = 0;
		document.getElementById("row").style.zIndex = "100";
		document.getElementById("column").style.zIndex = "1000";
		oldSelection = selection;
		selection = 6;
		changeKey();
		removeCenter();
	} else {
		if (selection == 0) {
			selection = 14;
			oldSelection = 0;
			changeKey();
		} else {
			oldSelection = selection;
			selection--;
			changeKey();
		}
	}
};

function moveDown() {
	if (state == 1) {
		state = 0;
		document.getElementById("row").style.zIndex = "100";
		document.getElementById("column").style.zIndex = "1000";
		oldSelection = selection;
		selection = 8;
		changeKey();
		removeCenter();
	} else {
		if (selection == 14) {
			selection = 0;
			oldSelection = 14;
			changeKey();
		} else {
			oldSelection = selection;
			selection++;
			changeKey();
		}
	}
};

function moveLeft() {
	if (state == 0) {
		state = 1;
		document.getElementById("row").style.zIndex = "1000";
		document.getElementById("column").style.zIndex = "100";
		oldSelection = selection;
		selection = 106;
		changeKey();
		removeCenter();
	} else {
		if (selection == 100) {
			selection = 114;
			oldSelection = 100;
			changeKey();
		} else {
			oldSelection = selection;
			selection--;
			changeKey();
		}
	}
};

function moveRight() {
	if (state == 0) {
		state = 1;
		document.getElementById("row").style.zIndex = "1000";
		document.getElementById("column").style.zIndex = "100";
		oldSelection = selection;
		selection = 108;
		changeKey();
		removeCenter();
	} else {
		if (selection == 114) {
			selection = 100;
			oldSelection = 114;
			changeKey();
		} else {
			oldSelection = selection;
			selection++;
			changeKey();
		}
	}
};


function select() {
	animation();
	if (state == 0) {
		if (selection == 7) {
			str = document.getElementById("inputText").innerText
			str = str.substring(0, str.length - 1);
			document.getElementById("inputText").innerText = str;
		} else if (selection == 14) {
			document.getElementById("inputText").innerText += " ";
		} else {
			document.getElementById("inputText").innerText += col[selection];
		}
	} else if (state == 1) {
		if (selection == 107) {
			str = document.getElementById("inputText").innerText
			str = str.substring(0, str.length - 1);
			document.getElementById("inputText").innerText = str;
		} else if (selection == 114) {
			document.getElementById("inputText").innerText += " ";
		} else {
			document.getElementById("inputText").innerText += row[selection - 100];
		}
	}
}

function changeKey() {
	var elementA = document.getElementById(oldSelection);
	elementA.classList.replace("text-bg-white", "text-bg-dark");
	elementA.classList.toggle("fw-bold");
	var elementB = document.getElementById(selection);
	elementB.classList.replace("text-bg-dark", "text-bg-white");
	elementB.classList.toggle("fw-bold");
};

function removeCenter() {
	var elementA = document.getElementById(7);
	var elementB = document.getElementById(107);
	elementA.classList.replace("text-bg-white", "text-bg-dark");
	elementA.classList.toggle("fw-bold");
	elementB.classList.replace("text-bg-white", "text-bg-dark");
	elementB.classList.toggle("fw-bold");
};

function animation() {
	document.getElementById(selection).classList.add("animate");
	document.getElementById(selection).classList.add("animate");
	setTimeout(() => {
		document.getElementById(selection).classList.remove("animate");
		document.getElementById(selection).classList.remove("animate");
	}, 250);
}

function correction() {
	if (!CSS.supports('selector(html:has(body))')) {
		if (!document.getElementById(7).classList.contains("text-bg-white")) {
			document.getElementById(7).classList.replace("text-bg-dark", "text-bg-primary");
		}
		if (selection == 7) {
			document.getElementById(7).classList.replace("text-bg-primary", "text-bg-white");
		}
		if (!document.getElementById(107).classList.contains("text-bg-white")) {
			document.getElementById(107).classList.replace("text-bg-dark", "text-bg-primary");
		}
		if (selection == 107) {
			document.getElementById(107).classList.replace("text-bg-primary", "text-bg-white");
		}
		if (!document.getElementById(14).classList.contains("text-bg-white")) {
			document.getElementById(14).classList.replace("text-bg-dark", "text-bg-primary");
		}
		if (selection == 14) {
			document.getElementById(14).classList.replace("text-bg-primary", "text-bg-white");
		}
		if (!document.getElementById(114).classList.contains("text-bg-white")) {
			document.getElementById(114).classList.replace("text-bg-dark", "text-bg-primary");
		}
		if (selection == 114) {
			document.getElementById(114).classList.replace("text-bg-primary", "text-bg-white");
		}
	}
}
