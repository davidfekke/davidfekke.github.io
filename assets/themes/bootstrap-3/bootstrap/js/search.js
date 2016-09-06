"use strict";

$(document).ready(function() {
	$("#searchBtn").on('click', function() {
		var searchText = $("#searchText").val();
		performSearch(searchText);
	});
	$("#searchText").on('keypress', function(event) {
		if (event.keyCode === 13) 
		{
			performSearch(this.val());
			return false;
		}
	});
	$('img').addClass('img-responsive');
});

function performSearch(textOfSearch) {
	window.location.href = "https://www.google.com/search?q=site:fek.io+" + textOfSearch;
}