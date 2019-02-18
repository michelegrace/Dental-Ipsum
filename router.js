const express = require('express');
const router = express.Router();
const json = JSON.parse(require('fs').readFileSync('data/Quotes.json', 'utf8'));
const quotes =json.quotes;

// Index
router.get('/', (req, res) => {
    res.render('index');
});

//Output
router.get('/ipsum', (req, res) => {
    res.render('ipsum', {
        quote: quotes[[Math.floor(Math.random()*quotes.length)]]
    });
});

router.get('/ipsum-long', (req, res) => {

        var sentences = [];
            // I need a for loop to run
            for(var i = 0; i <= 4; i++){
                // I need it to store the five random sentences
                sentences.push(quotes[[Math.floor(Math.random()*quotes.length)]]);
            }

            //Wow I was making this way harder than it needed to be. 
            // Then I need to be able to plug in those 5 random sentences into the pug template
    res.render('ipsum-long', { quote: sentences.join("") });

});

module.exports = router;

// This gets me as far as having the page LOAD but is blank (wasn't called in template properly): 

/*
    var paragraphContent = [];
        for(var i=0; i<3; i++){
            paragraphContent.push( quotes[[Math.floor(Math.random()*quotes.length)]])
        }
    res.render('ipsum-long', {quote: paragraphContent[0]}); */