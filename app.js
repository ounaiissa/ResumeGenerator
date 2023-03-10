const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
// const bodyParser =require('body-parser');

const app = express();


app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));




// app.get('./views/templates', (req, res)=>{
//     res.render('templates.hbs');
// })
app.get('/', (req, res)=>{
    res.render('home');
});

dotenv.config({path: './.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect(err =>{
    if(err){
        console.log(err);
    }else{
        console.log('MYSQL connected...');
    }
});


app.use('/', require('./routes/page'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, ()=>{
    console.log("Server has been started on 3000");
});