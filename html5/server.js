var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");
var path = require("path");
var app = express();

var items = [{
	id: 1,
	text: "this is the first todo item",
	isDone: true
}, {
	id: 2,
	text: "this is the second todo item",
	isDone: false
}];

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/items", function(req, res) {
	return res.json(items);
});

app.post("/items", function(req, res) {
	items.push(req.body);
	return res.json(items);
});

app.get("/items/:id", function(req, res) {
	var item = _.find(items, function(item) {
		return item.id == req.params.id;
	});

	if (!item) {
		return res.status(404).json({
			message: "The item with id '" + req.params.id + "' could not be found."
		});
	}

	return res.json(item);
});

app.delete("/items/:id", function(req, res) {
	var removedItems = _.remove(items, function(item) {
		return item.id == req.params.id;
	});

	if (removedItems.length < 1) {
		return res.status(404).json({
			message: "The item with id '" + req.params.id + "' could not be found."
		});
	}

	return res.json(items);
});

var server = app.listen(1337, function() {
	console.log("App listening at http://localhost:1337/");
});
