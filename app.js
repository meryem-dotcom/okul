const express = require('express');
const userRouter = require('./routes/userrouter');
const PORT = 5000;

const app = express();

app.use(userRouter);

app.get('/',(req,res)=>{
    res.send('budur');
});

app.use((req,res)=>{
    res.send('sayfa yokkkkk');
});

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
});
