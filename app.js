const mysql=require('mysql');
const express=require('express');
const session=require('express-session');

const app=express();
const routes=require('./routes/router.js');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

app.use('/things',routes);

app.listen(3000,()=>{
	console.log("server running...");
});

