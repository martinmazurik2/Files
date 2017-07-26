var express      = require('express'),
    bodyParser   = require('body-parser'),
    fs           = require('fs'),
    app          = express(),
    repos        = JSON.parse(fs.readFileSync('data/repositories.json', 'utf-8')),
    contributors = JSON.parse(fs.readFileSync('data/contributors.json', 'utf-8'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//serving node_modules directly to keep everything as simple as possible
app.use('/node_modules', express.static(__dirname + '/node_modules'));

//The src folder has our static resources (index.html, css, images)
app.use(express.static(__dirname + '/src'));

app.get('/api/repositories', (req, res) => {
    res.json(repos);
});

app.get('/api/contributors', function(req, res) {
    res.json(contributors);
});

// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000);

console.log('Express listening on port 3000.');

//Open browser
var opn = require('opn');

opn('http://localhost:3000').then(() => {
    console.log('Browser closed.');
});
