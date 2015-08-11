var api = require("./api");

api.getItems().then(function(items) {
	//do something with the items
	console.log(items);
});
