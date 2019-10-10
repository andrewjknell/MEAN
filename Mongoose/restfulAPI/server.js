const express = require('express'),
    flash = require('express-flash'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();

app.use(flash());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(express.json());

app.get("/", (req, res) => {
    People.find()
        .then(people => res.json(people))
        .catch(err => res.json(err));
})

app.get("/new/:name", (req, res) => {
    const { name } = req.params;
    const people = new People();
    console.log('1')
    people.name = name;
    people.save()
        .then(peopleData => res.json(peopleData))
        .catch(err => res.json(err));
})

app.get('/delete/:name', (req, res) => {
    const { name } = req.params;
    People.remove({ name: name })
        .then(deletedName => res.json(deletedName))
        .catch(err => res.json(err));
})

app.get('/:name', (req, res) => {
    const { name } = req.params;
    People.find({ name: name })
        .then(nameFound => res.json(nameFound))
        .catch(err => res.json(err));
})

const PeopleSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },

}, { timestamps: true })

const People = mongoose.model('People', PeopleSchema);

mongoose.connect('mongodb://localhost/1995', { useNewUrlParser: true });
app.listen(8000, () => console.log('listening on port 8000'));

