//Problem : Need an on-brand lorem ipsum generator when we are waiting for content. Would be nice to be able to
// select what context we need lorem ipsum for.
// Solution: Make a simple app that generates a string of dental-inspired Lorem Ipsum based on length and use-case specified by user.

    //Steps:
        // 💯 Set up express and routes
        // 💯 pug templates
        // 💯 quotes and randomize to get a sentence
        // 💯 randomize to get a paragraph
        // make it auto save to clipboard

//Set Up Server
const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

//Configure Routes
const routes = require('./router');
app.use('/', routes);

app.listen(port, () => console.log(`Everything is coming up Milhouse!`));


