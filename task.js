let unit = "", count = 0, arr = []; // Measurement unit, current sum, array value of sring "Number", button ID

const stringElements = 4;	


// Item adding function

function add() {

	unit = measureUnit.value;
	measureUnit.disabled = true;

	// String creating 

	let box = document.createElement('div');
	box.className = 'box';
	task.append(box);

	// Checkbox creating

	let check = document.createElement('input');
	check.type = "checkbox";
	check.className = "checkboxes";

	check.onclick = function () {
		(check.checked) ?	box.style.background = 'lightgreen' : box.style.background = ''; 
	}

	box.append(check);

	// "Name" and "Number" HTML elements creating
	
	let element = document.querySelector('#productName').value;
	let number = document.querySelector('[name="num"]').value;
	
	let divElement, divNumber;

	divElement = document.createElement('div');
	divElement.innerText = element;
	divElement.className = 'text';
	box.append( divElement);

	divNumber = document.createElement('div')
	divNumber.innerText = number + " " + unit;
	divNumber.className = 'number';
	box.append( divNumber);
	
	
	count += +number;
	arr.push({element, number});

	// Delete item button creating

	let deleteButton = document.createElement('button');
	deleteButton.type = "button";
	deleteButton.className = 'delete-button';
	deleteButton.id = "button" + arr.length;
	deleteButton.innerText = "Delete";

	deleteButton.onclick = function () {
		count -= arr[ +deleteButton.id.slice(6) - 1 ];
		arr[+deleteButton.id.slice(6) - 1] = null;

		deleteButton.parentElement.remove()
		computeTheSum();
	}

	box.append(deleteButton);

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
			task.lastElementChild.remove()
		}
	}

	measureUnit.value = "";
	measureUnit.disabled = false;

	return arr.length = 0, count = 0;
}
