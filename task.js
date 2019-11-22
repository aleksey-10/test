let unit = "", count = 0, arrOfNumbers = [], buttonId = 0;	// Measurement unit, current sum, array value of sring "Number", button ID


// Item adding function

function add() {

	unit = measureUnit.value;
	measureUnit.disabled = true;

	// HTML element of "Name" and "Number" creating

	let element = document.querySelector('#productName').value;
	let number = document.querySelector('[name="num"]').value;
	
	let divElement, divNumber;

	divElement = document.createElement('div');
	divElement.innerText = element;
	task.append( divElement);

	divNumber = document.createElement('div')
	divNumber.innerText = number + " " + unit;
	task.append( divNumber);
	
	
	count += +number;
	arrOfNumbers.push(number);


	// Delete item button creating

	let button = document.createElement('button');
	button.type = "button";
	button.id = "button" + arrOfNumbers.length;
	button.innerText = "Delete Item";

	button.onclick = function () {
		button.previousElementSibling.remove();
		button.previousElementSibling.remove();
		button.remove();

		count -= arrOfNumbers[+button.id.slice(6) - 1];
		arrOfNumbers[+button.id.slice(6) - 1] = null;

		computeTheSum();
	}

	task.append(button);


	document.querySelector('#productName').value = "";
	document.querySelector('[name="num"]').value = "";
	document.querySelector('#productName').focus();
}


// Sum computing function

function computeTheSum() {
	taskSumm.lastElementChild.remove();

	let sumIs = document.createElement('div');
	sumIs.innerText = "Сумма: " + count + " " + unit;
	sumIs.style.borderTop = "1px solid black";
	sumIs.id = "sumId";
	taskSumm.append( sumIs );
}


// Function of clearing all items and sum computing string 

function clearAll () {
	taskSumm.lastElementChild.remove();
	taskSumm.append( document.createElement('br') );

	for(let i = 0; i < arrOfNumbers.length; i++) {
		if (arrOfNumbers[i] != null)  {
			for(let j = 0; j < 3; j++)
				task.lastElementChild.remove();
		}
	}

	measureUnit.value = "";
	measureUnit.disabled = false;

	return arrOfNumbers.length = 0, count = 0, buttonId = 0;
}
