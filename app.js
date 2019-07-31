const express = require('express');
const userRouter = require('./routes/userrouter');
const exphbs = require('express-handlebars');
const PORT = 5000;

const app = express();

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
