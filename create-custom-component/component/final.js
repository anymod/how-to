component.data.quoteText = ''
component.data.quoteAuthor = ''
var url = "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"

component.methods = {
	getQuote: function () {
		Component.axios.get(url)
		.then(function(res) {
			component.data.quoteText = res.data.quoteText
			component.data.quoteAuthor = res.data.quoteAuthor
		})
	}
}
