# Interview Tests

> Tests to give to scared interviewees

There are two tests, an [HTML 5 / JS test](html5) & a [C# test](csharp).

![choose wisely](choose-wisely.jpg)

## Setup the Tests for the Interviewee

Clone this repo onto the interview computer. Delete everything in the root and only leave behind the folder of the test you want to give (e.g. `csharp` or `html5`).

### C# test

1. Open the solution in Visual Studio
2. Build the solution. It should restore nuget dependencies and successfully build.
3. Make sure the test cases are able to be run via the Test Explorer.

### HTML5 Test

1. Open command prompt, run `npm install`
2. Run `npm start`
3. Open Chrome to [localhost:1337](http://localhost:1337/). Confirm you see the HTML5 test.
4. Open a new command prompt, run `npm run watch`
