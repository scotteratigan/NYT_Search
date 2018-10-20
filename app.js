console.log("app.js is linked");

// Temporarily making vars global to inspect easily via console.
var url, searchTerm, numberOfRecords, startDate, endDate, articleList;

$("#search-button").on('click', runSearch);

$("#clear-button").on('click', clearSearchFields);

function runSearch() {
	event.preventDefault(); // Prevents page from reloading when '#search-button' is clicked.

	searchTerm = $("#search-term")[0].value;
	// numberOfRecords = $("#num-records")[0].value;
	startDate = $("#start-date")[0].value.replace(/\-/g, "") // replace '-' with '' using regexp
	// For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
	endDate = $("#end-date")[0].value.replace(/\-/g, "")

	console.log("Searching for", searchTerm);

	// Built by LucyBot. www.lucybot.com
	url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
		'api-key': "67aaaefab1dd4e45a84295f45a487adb",
		'q': searchTerm
	});

	if (startDate && endDate) {
		url += $.param({
			'begin_date': startDate,
			'end_date': endDate
		})
	}

	console.log("Search URL is...", url);

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	  articleList = result.response.docs;
	  displayArticles(articleList);
	  console.log(articleList);
	}).fail(function(err) {
	  throw err;
	});
}

function displayArticles(articleList) {
	console.log('Appending...');
	var articleDiv = $('#articles')
	for(let i=0; i<articleList.length; i++) {
		let articleURL = articleList[i].web_url;
		let articleTitle = articleList[i].headline.main;
		articleDiv.append(`<a href="${articleURL}" target="_blank"><h5>${articleTitle}</h5></a>`)
	}
}

function clearSearchFields() {
	$("#search-term").empty();
	$("#number-of-records").empty();
	$("#start-year").empty();
	$("#end-year").empty();
	searchTerm = null;
	numberOfRecords	= null;
	startDate = null;
	endDate = null;
}