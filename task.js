let unit = "", count = 0, arr = [];	// Measurement unit, current sum, array value of sring "Number", button ID


// Item adding function

function add() {

	unit = measureUnit.value;
	measureUnit.disabled = true;

	// "Name" and "Number" HTML elements creating

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
	arr.push({element, number});

	// Delete item button creating

	let deleteButton = document.createElement('button');
	deleteButton.type = "button";
	deleteButton.id = "button" + arr.length;
	deleteButton.innerText = "Delete";

	deleteButton.onclick = function () {
		deleteButton.previousElementSibling.remove();
		deleteButton.previousElementSibling.remove();
		deleteButton.remove();

		count -= arr[+deleteButton.id.slice(6) - 1].number;
		arr[+deleteButton.id.slice(6) - 1] = null;

		computeTheSum();
	}

	task.append(deleteButton);

	document.querySelector('#productName').value = "";
	document.querySelector('[name="num"]').value = "";
	document.querySelector('#productName').focus();
}


// Sum computing function

function computeTheSum() {
	taskSumm.lastElementChild.remove();

	let sumIs = document.createElement('div');
	sumIs.innerText = "Сумма: " + count + " " + unit;
	sumIs.style.borderTop = "1px solid lightgray";
	sumIs.id = "sumId";
	taskSumm.append( sumIs );
}


// Function of clearing all items and sum computing string 

function clearAll () {
	taskSumm.lastElementChild.remove();
	taskSumm.append( document.createElement('br') );

	for(let i = 0; i < arr.length; i++) {
		if (arr[i] != null)  {
			for(let j = 0; j < 3; j++)
				task.lastElementChild.remove();
		}
	}

	measureUnit.value = "";
	measureUnit.disabled = false;

	return arr.length = 0, count = 0;
}
