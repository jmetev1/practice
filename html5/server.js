var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var acct = require("accounting");
var assign = require("lodash.assign");
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
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/items", function(req, res) {
	return res.json(items);
});

app.post("/items", function(req, res) {
	var item = assign({}, req.body, {
		price: acct.parse(req.body.price)
	});

	if (!item || !item.item || !item.price) {
		res.status(400);
		return res.json({
			message: 'Item & price are both required. Price must be a parsable US currency or a decimal. Example: { "item": "thing 1", "price": 500 }'
		});
	}

	items.push(req.body);
	return res.json(items);
});

var server = app.listen(1337, function() {
	console.log("App listening at http://localhost:1337/");
});
