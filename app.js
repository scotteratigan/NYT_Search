console.log("app.js is linked");

$("#search-button").on('click', runSearch);

$("#clear-button").on('click', clearSearchFields);

function runSearch() {

	event.preventDefault();

	var searchTerm = $("#search-term");
	var numberOfRecords = $("#number-of-records");
	var startYear = $("#start-year");
	var endYear = $("#end-year");

	console.log("Searching...");

	// Built by LucyBot. www.lucybot.com
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "67aaaefab1dd4e45a84295f45a487adb",
	  'q': "obama"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});
}

function clearSearchFields() {
	$("#search-term").empty();
	$("#number-of-records").empty();
	$("#start-year").empty();
	$("#end-year").empty();
}