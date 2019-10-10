const express = require('express'),
mongoose = require('mongoose'),
session = require('express-session'),
flash = require('express-flash'),
path = require('path'),
app = express();

app.use(flash());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "hellokit",
    resave: false,
    saveUninitialized: true
}))

const CommentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "must have a name"], 
        minlength:[2, "must be greater than 1 characters"]
    },
    comment: {
        type: String, 
        required: [true, "must have a comment"], 
        minlength:[2, "must be greater than 1 character"]
    },
},{timestamps: true})

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "must have a name"], minlength:[2, "must be greater than 1 characters"]},
    message: {type: String, required: [true, "must have a comment"], minlength:[2, "must be greater than 1 character"]},
    comment: [CommentSchema]
},{timestamps: true})

const Comment = mongoose.model('comment', CommentSchema);
const Message = mongoose.model('message', MessageSchema);

app.get('/', (req, res) => {
    Message.find()
        .then(data => res.render('index',{messages:data}))
        .catch(err=>res.json(err));
})

app.post('/message',(req,res)=> {
    const message = new Message(req.body);
    message.save()
        .then(newMessageData => {
            console.log('message added', newMessageData);
            res.redirect('/')})
        .catch(err =>{
            console.log(err);
            res.redirect('/')
        })
})

app.post('/comment/:id',(req,res)=>{
    const {id} = req.params;
    Comment.create(req.body, function(err, addComment){
        console.log(addComment);
        if(err){
            res.json(err);
        }
        else{
            Message.findByIdAndUpdate({_id: id}, {$push: {comment: addComment}}, function(err, data){
                if(err){
                    res.json(err);
                }
                else{
                    console.log(data)
                    res.redirect('/');
                }
            })
        }
    })
    
})


mongoose.connect('mongodb://localhost/thewall', { useNewUrlParser: true });
app.listen(8000, () => console.log('listening on port 8000'));