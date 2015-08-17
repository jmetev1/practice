# How this Test Works

You have 30 minutes to accomplish as many of the tasks below as possible. After 30 minutes, you must stop, the time cannot be extended. Someone will check in with you after 15 minutes to answer any questions you may have. Focus on results and don't try to impress us with software patterns or fancy code tricks.

## The Situation

There exists a UI which lacks the tender loving care it so desperately needs. You will need to improve the UI and hook it up to a real data source. The HTML page is currently displaying a list of widgets and their associated prices in a table.

### Tasks

#### HTML/CSS

The page is including the bootstrap base CSS file. Feel free to use any bootstrap and/or custom styles to implement the following:

1. Add a footer to the table which will show the sum total price of all the items in the table.

2. Center-align the header fields.

3. Right-align the price field in the table while leaving the header fields centered.

4. Zebra-stripe the table. In other words, highlight every other row with a light-grayish-type color.

#### Javascript

The `index.js` file in the `public` folder is set to be built with [browserify](http://browserify.org/). Any change you make to the file will auto-build into `build.js` which the page is including. You should be able to edit the file, refresh the page, and see your changes. Feel free to use any package available on [npm](https://www.npmjs.com/) to implement the following:

1. Update the table to pull data from a JSON API. Make an AJAX `GET` request to `/items` which will return a JSON array of items with an `item` & `price` fields. Make sure to keep the price formatted the same way it is now (with a dollar sign and 2 decimal points).

2. Add a new form to the bottom of the page to allow adding new items to the list. Don't worry about validation of the field inputs yet. Use a `number` field for the price to allow modern browsers & mobile devices to show a spinner control. When you add a new item, it should save it to the server by issuing a `POST`  request to `/items`. The `POST` body should be JSON:

```json
{
	"item": "My Awesome New Thing",
	"price": 552
}
```

The server only accepts the price as a decimal value. Don't send formatted values to the server.

3. Add validation to the form to require the item name to not be empty and the price to be greater than zero.
