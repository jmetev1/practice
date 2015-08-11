var $ = require("jquery");

exports.getItems = function() {
	return $.ajax("/items", {
		type: "GET"
	});
};

exports.addNewItem = function(item) {
	return $.ajax("/items", {
		type: "POST",
		data: item
	});
};

exports.removeItem = function(id) {
	return $.ajax("/items/" + id, {
		type: "DELETE"
	});
};
