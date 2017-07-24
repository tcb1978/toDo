

//User clicked on add button, get value
//add that text to to-do list
document.getElementById('add').addEventListener('click', function(){
	var value = document.getElementById('item').value;
	if (value) {
		addItemToDo(value);
		document.getElementById('item').value = '';
	}
});


//Create new list with items
function addItemToDo(text) {
	var innerList = '<div class="buttons"><button id="complete" name="button" class="complete green"  type="button"><i class="fa fa-check green" aria-hidden="true"></i></button><button  id="remove" name="button" class="remove red" type="button"><i class="fa fa-trash-o red" aria-hidden="true"></i></button></div>';

	var list = document.getElementById('todo');
	var item = document.createElement('li');
	var value = document.getElementById('item').value;
	item.innerHTML = value + innerList;
	list.insertBefore(item, list.childNodes[0]);
	// Add click event to remove item
	var remove = document.getElementById('remove');
	remove.addEventListener('click', removeItem);
	// Add Click event for completed items
	var complete = document.getElementById('complete');
	complete.addEventListener('click', completeItem);
}

//Remove item when trash is clicked
function removeItem() {
	var list = document.getElementById('todo');
	this.parentNode.parentNode.remove(list);
}

// Add item to 'Completed' list when check button is clicked
function completeItem() {
    var item = this.parentNode.parentNode;//Gets li
    var parent = item.parentNode;//Gets ul
    id = parent.getAttribute('id');//Gets ul id

    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item); //Remove li from current ul
    target.insertBefore(item, target.childNodes[0]);// add it to new ul
}












