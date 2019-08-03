const express = require('express');
const userRouter = require('./routes/userrouter');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 5000;

const app = express();

//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Mongo db connectionu

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
mongoose.connection.on('error', err => {
  console.log('mongo db düştü ' + err);
});
mongoose.connection.once('open',()=>{
    console.log('database e bağlandı');
})

app.engine('handlebars', exphbs({defaultLayout: 'mainlayout'}));
app.set('view engine', 'handlebars');

app.use(userRouter);

app.get('/',(req,res)=>{
    pagemessage = {
        title: 'home page'
    }
    res.render('pages/home',pagemessage);
});

app.use((req,res)=>{
    res.render('static/404');
});

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
});
