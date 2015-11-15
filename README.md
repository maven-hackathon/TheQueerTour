# The Queer Tour

A self-guided tour of the Castro neighborhood of San Francisco, Calif., begun at the 2015 [Hack 4 Queer Youth](http://mymaven.org/hack/) with content from the amazing youth at [LYRIC](https://www.lyric.org). Contributions welcome!

### How does this work?
The locations are pulled from a [Google spreadsheet](https://docs.google.com/spreadsheets/d/1no8Hu1HQykrnwb-vwRo8fDElhht7Sx3YWI0zOqtxWgM/edit?ts=564780c2#gid=0), run through CartoDB, and displayed via this ReactJS app.

### I want to help! What can I do?
Please see the [issue queue](https://github.com/maven-hackathon/TheQueerTour/issues) and [UX documentation](https://github.com/maven-hackathon/TheQueerTour/blob/master/QueerTour.pptx).

### Getting started

Just clone the repo, install Node.js modules and run `npm start`:

```
$ git clone https://github.com/maven-hackathon/TheQueerTour.git
$ cd TheQueerTour
$ npm install
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

### How to test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```
$ npm test
```

### How to deploy

```shell
$ npm run deploy                # Deploys the project to GitHub Pages
```

Alternatively, you can build a production release to manually deploy to S3, Firebase, Netlify, and other static hosts. Simply run the command below and copy the generated `build` folder to your static host.

```shell
$ npm run build release         # Build production release
```

---
Based on React Static Boilerplate, which was made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/koistya/react-static-boilerplate/graphs/contributors) &nbsp;|&nbsp; MIT License
