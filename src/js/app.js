//hide/show function for toggle button and li's that have been selected as done
$(function() {
	$('#hideShow').on('click', function(){
		$('li.strike-through').toggleClass('hidden');
	})
});

//Placeholder for dragging items
$(function() {
    $( "#todo" ).sortable({ 
        placeholder: "ui-sortable-placeholder" 
    });
});
