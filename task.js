let unit = "", count = 0, arrOfNumbers = [], buttonId = 0;

function add() {

	let element, number;

	unit = measureUnit.value;
	measureUnit.disabled = true;

	element = document.querySelector('#productName').value;
	number = document.querySelector('[name="num"]').value;
	
	let divElement, divNumber;

	divElement = document.createElement('div');
	// divElement.className += "describer";
	divElement.innerText = element;
	task.append( divElement);

	divNumber = document.createElement('div')
	divNumber.innerText = number + " " + unit;
	task.append( divNumber);
	
	
	count += +number;
	arrOfNumbers.push(number);



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
	}

	task.append(button);


	document.querySelector('#productName').value = "";
	document.querySelector('[name="num"]').value = "";
}

function computeTheSum() {
	taskSumm.lastElementChild.remove();

	let sumIs = document.createElement('div');
	sumIs.innerText = "Сумма: " + count + " " + unit;
	sumIs.style.borderTop = "1px solid black";
	sumIs.id = "sumId";
	taskSumm.append( sumIs );
}

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