const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/static"));
app.get("/index",(req,res) =>{
    res.render("index")
})
app.get("/cats", (req, res) => {
    res.render('cats');
})
app.post('/users', (req, res) => {
    console.log(req.body) 
    res.redirect('/')
});
app.get("/snuggles", (req, res) => {
    // hard-coded user data
    var cat_data = {name: "Cuddles",pic:"/1.jpg", favorite_food: "cheese and crackers", age:"6", 
    sleep_spots:["under couch","in the tree","outside"]};
 
    res.render('details', {details: cat_data});
})
app.get("/cuddles", (req, res) => {
    // hard-coded user data
    var cat_data = {name: "Cuddles",pic:"/3.jpg", favorite_food: "chow mein", age:"6", 
    sleep_spots:["under my butt","in the beehive","in my bed"]};

    res.render('details', {details: cat_data});
})
app.listen(8000, () => console.log("listening on port 8000"));