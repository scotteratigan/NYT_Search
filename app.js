console.log("app.js is linked");

$("#search-button").on('click', runSearch);

$("#clear-button").on('click', clearSearchFields);

function runSearch() {
	var searchTerm = $("#search-term");
	var numberOfRecords = $("#number-of-records");
	var startYear = $("#start-year");
	var endYear = $("#end-year");
}

function clearSearchFields() {
	$("#search-term").empty();
	$("#number-of-records").empty();
	$("#start-year").empty();
	$("#end-year").empty();
}