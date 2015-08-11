# Bidding Client

> Javascript client & components to connect to the bidding API

## Run locally

Make sure you have the [CivicSource private npm registry](https://github.com/civicsource/first-time-setup#civicsource-npm-feed) set up.

```
npm install
npm start
```

This will spin up a webserver on port `1337` and open it in a browser.

## Debugging locally

While developing locally, open a new terminal window and run:

```
npm run watch
```

This will setup a file system watch which will incrementally build any changes you make to the source files. It yields automatic & much faster builds than constantly running `npm run build`.
