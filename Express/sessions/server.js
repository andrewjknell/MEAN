const express = require("express");
const app = express();
const session = require('express-session');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  
    if(req.session.counter){
        req.session.counter ++;
    
    }
    else{
        req.session.counter = 1;
        
    }
    res.render('index',{counter:req.session.counter});
});
app.get('/delete',(req,res)=> {
    req.session.counter = 0;
    res.redirect("/")
})


app.listen(8000, () => console.log("listening on port 8000"));