

//User clicked on add button, get value
//add that text to to-do list
document.getElementById('add').addEventListener('click', function(){
	var value = document.getElementById('item').value;
	if (value) {
		addItemToDo(value);
		document.getElementById('item').value = '';
	}
});
var elem = document.getElementById('item');
	elem.addEventListener('keypress', function(e){
	var value = document.getElementById('item').value;
	  if (e.keyCode == 13) {  
	    addItemToDo(value);
		document.getElementById('item').value = '';
    }
});

//Create new list with items
function addItemToDo(text) {
	var innerList = '<div class="buttons" id="buttons"><button id="complete" name="button" class="complete green"  type="button"><i class="fa fa-check green" aria-hidden="true"></i></button><button  id="remove" name="button" class="remove red" type="button"><i class="fa fa-trash-o red" aria-hidden="true"></i></button></div>';

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

// If item is marked as completed give show toggle for hide/show
function completeItem() {
	var thislineitem = this.parentNode.parentNode;//Gets li
	thislineitem.className += 'strike-through ';
	if (thislineitem.classList.contains('strike-through')) {
		var hideShow = document.getElementById('hideShow');
		hideShow.classList.toggle('hidden');
	}
}

// hide/show completed items when toggle click
// Add Click event for toggle
var toggleHideShow = document.getElementById('hideShow');
	toggleHideShow.addEventListener('click', function(){
		var strikeThroughLists = document.getElementsByTagName('li');
		for (var i = strikeThroughLists.length - 1; i >= 0; i--) {
			strikeThroughLists = strikeThroughLists[i];
			if (strikeThroughLists.classList.contains('strike-through')) {
				strikeThroughLists.classList.toggle('hidden');
			}
		}
});






