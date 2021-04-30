const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const books = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.post('/add-book', (req, res, next) => {
    books.push({ title: req.body.title, summary: req.body.summary })
    res.render('display-book', { title: req.body.title, summary: req.body.summary });
});

app.post('/remove-book', (req, res, next) => {
    books.splice(req.body.deleteBook, 1)
    res.redirect('/');
});

app.get('/', (req, res, next) => {
    res.render('index', { books: books });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);