const express = require('express');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.post('/add-book', (req, res, next) => {
    res.render('display-book', { title: req.body.title, summary: req.body.summary });
});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(PORT);