const   express = require("express"),
        mongoose = require('mongoose'),
        flash = require('express-flash'),
        session = require('express-session'),
        path = require('path'),
        app = express();


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/client/views/'));
app.use(express.static(path.join(__dirname, "/client/static/")));
app.use(express.urlencoded({ extended: true }));



require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, () => console.log("listening on port 8000"));