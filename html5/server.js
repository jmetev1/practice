var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");
var path = require("path");
var app = express();

var items = [{
	item: "Homer Simpson's Right Toenail",
	price: 0.47
}, {
	item: "Avatar (the movie)",
	price: 237000000
}, {
	item: "Arc Reactor",
	price: 42
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

var server = app.listen(1337, function() {
	console.log("App listening at http://localhost:1337/");
});
