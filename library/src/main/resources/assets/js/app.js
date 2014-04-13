$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);

	var msg = $.ajax({
		type: "put",
		url : "/library/v1/books/" + isbn + "?status=lost",
		success: function(response) {
		        $('#'+isbn).prop("disabled",true);
		        $('#'+isbn+'StField').html("lost");
		    }
	});
    alert('Book of ISBN ' + isbn + ' is lost.');
});