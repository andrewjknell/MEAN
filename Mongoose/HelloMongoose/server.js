const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');

app.use(flash());
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


app.get('/view', (req, res) => {
    Quote.find()
        .then(data => res.render("view", { quotes: data }))
        .catch(err => res.json(err));
})


app.post('/quotes', (req, res) => {
    //console.log("1")
    const quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    //console.log("2")
    quote.save()
        .then(newQuoteData =>{
            console.log('quote created: ', newQuoteData);
            res.redirect('/view')})
        .catch(err => {
            console.log(err);
            for (var key in err.errors) {
                req.flash('quote', err.errors[key].message);
            }
            res.redirect('/')
        });
       
})
mongoose.connect('mongodb://localhost/dbQuotingDojo', { useNewUrlParser: true });
const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    quote: { type: String, required: true, minlength: 5 },

}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);
app.listen(8003, () => console.log("listening on port 8003"));
