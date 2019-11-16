unit = prompt("Единица измерений", "Грн");

let count = 0;

function add() {

	let element, number;

	element = document.querySelector('#productName').value;
	number = document.querySelector('[name="num"]').value;
	
	let divElement, divNumber;

	divElement = document.createElement('div');
	divElement.innerText = element;
	// p.innerText = element + ": " + number + " " + unit;
	task.append( divElement);

	divNumber = document.createElement('div')
	divNumber.innerText = number + " " + unit;
	task.append( divNumber);
	
	count += +number;
	
}

function computeTheSum() {
	task.append( document.createElement('br') );	

	let sumIs = document.createElement('div');
	sumIs.innerText = "Сумма: " + count + " " + unit;
	sumIs.style.borderTop = "1px solid black";
	task.append( sumIs );
}












// formValue.append( innerText = form1. );

// arrOfElements.push(  );








// function mySheet() {

// 	let elements = [], str, unit = prompt("What is the unit?", "Грн");

// 	while (true) {
// 		let str = prompt("Enter your string", "");
// 		if ( str === null ) break;
// 		elements.push( str.split(",") );
// 	}

// 	let p = [];
	
// 	for (let i = 0; i < elements.length; i++) {
// 		p.push( document.createElement('p') );
// 		p[i].innerText = elements[i] + " " +unit;
// 		task.append( p[i] );
// 	}

// 	let sum = 0;
	
// 	for (let i = 0; i < elements.length; i++) {
// 		sum += +elements[i][1];
// 	}
	
// 	task.append( document.createElement('hr') );

// 	let sumIs = document.createElement('p');
// 	sumIs.innerText = "Сумма: " + sum + " " + unit;
// 	task.append( sumIs );
// } 

// mySheet();
