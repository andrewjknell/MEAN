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
}));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    //console.log(req.session.rand)
    if(req.session.rand){
        req.session.rand == req.session.rand;
    }else{
        req.session.rand = (Math.floor(Math.random()*10));
    }
    
    res.render('index', {incorrect:req.session.incorrect, correct: req.session.correct});
})
app.post('/guess',(req,res) => {
    let guess = req.body.guess;
    let num = req.session.rand;
    if(guess != num){
        req.session.incorrect = {div: "incorrect", num: num+ " was not the number!"}
    }
})
app.get('/destroy',(req,res)=>{
    req.session.destroy();
    res.redirect('/')
})


app.listen(8001, () => console.log("listening on port 8001"));