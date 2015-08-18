# How this Test Works

You have 45 minutes to accomplish as many of the tasks below as possible. After 45 minutes, you must stop, the time cannot be extended. Someone will check in with you after 15 minutes to answer any questions you may have. Focus on results and don't try to impress us with software patterns or fancy code tricks.

## The Situation

There exists a UI which lacks the tender loving care it so desperately needs. You will need to improve the UI and hook it up to a real data source. The HTML page is currently displaying a list of widgets and their associated prices in a table.

### Tasks

Feel free to do each task in any order you like.

#### HTML/CSS

The page is including the [bootstrap](http://getbootstrap.com/) base CSS file. Feel free to use any bootstrap and/or custom styles to implement the following:

1. Add a footer to the table which will eventually show the sum total price of all the items in the table. The left column should read _Sum:_, while the right column will read _$0.00_ for now.

2. Center-align the header fields. Leave the table body & footer item fields left-aligned. Right-align the price field in the table body & footer.

3. Zebra-stripe the table. In other words, highlight every other row with a light-grayish-type color.

#### Javascript

The `index.js` file in the `public` folder is set to be built with [browserify](http://browserify.org/). Any change you make to the file will auto-build into `build.js` which the page is including. You should be able to edit the file, refresh the page, and see your changes. Feel free to use any package available on [npm](https://www.npmjs.com/) to implement the following:

1. Update the table footer to sum the prices in the table. Make sure to format the sum total price in US currency format (with a dollar sign, commas, and 2 decimal points).

2. Update the table to pull data from a JSON API on page load (replace the data currently in the table with data from the JSON API). Make an AJAX `GET` request to `/items` which will return a JSON array of items with `item` & `price` fields. Make sure to keep the price formatted as US Currency in the widgets table. The data returned from the API will look something like this:

	```json
	[{
		"item": "Thing 1",
		"price": 49.99
	}, {
		"item": "Thing 2",
		"price": 1000.00
	}]
	```

3. Wire up the _Add New_ form at the bottom of the page to add new items to the table. When you add a new item, it should add it to the end of the table. It should also save the new item to the server by issuing a `POST` request to `/items`. The `POST` body should be JSON (the server won't accept form data):

	```json
	{
		"item": "My Awesome New Thing",
		"price": 552
	}
	```

	The server only accepts the price as a decimal value. Don't send formatted values to the server.

4. Add validation to the form to require the item name to not be empty and the price to be greater than zero. The price field should be liberal in what it accepts (e.g. _5000_, _$5000_, _5000.00_, _5,000.00_, & _$5,000.00_ should all be valid values).
