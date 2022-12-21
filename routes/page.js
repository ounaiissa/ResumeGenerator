const express = require('express');
const router = express.Router();


router.get('./', (req, res)=>{
    res.render('app');
});

router.get('/login', (req, res) =>{
    res.render('login');
});

router.get('/register', (req, res) =>{
    res.render('register');
});

router.get('/templates', (req, res) =>{
    res.render('templates');
});

router.get('/cv1', (req, res) =>{
    res.render('cv1');
});
router.get('/cv2', (req, res) =>{
    res.render('cv2');
});


module.exports = router;