const express = require("express");
const app = express();
const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.urlencoded({ extended: true }));

app.get('/index', (req, res) => {
    res.render('index');
})

app.post('/result', (req, res) => {
    console.log("hello")
    req.session.info = { name: req.body.name, location: req.body.location, language: req.body.language, comments:req.body.comments };

    res.redirect('/results');
})
app.get('/results', (req, res) => {

    res.render('results', { info: req.session.info });
})

app.listen(8000, () => console.log("listening on port 8000"));