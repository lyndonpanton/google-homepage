window.onload = function() {
	const form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		const query = event.target.search.value.split(" ").join("+");
		window.open("https://www.google.com/search?q=" + query);
	});
};