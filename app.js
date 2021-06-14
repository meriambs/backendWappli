const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
app.use(express.static(path.join(__dirname, 'uploads/')))
//connectionb db ;
const connectDB = require("./config/db");

const cors = require('cors');
connectDB();


app.use(express.static('./public'));
app.use('/api/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'front')));

//ici les rest des routes : 

const personRouter = require ('./routes/User')
 const authentificationRouter = require ('./routes/Auth');
 const postRouter = require ('./routes/Post');
 const profilRouter = require ('./routes/Profil');
const shareRouter = require('./routes/Share');


 const videoRoutes = require('./routes/Video');
 const applicationRoutes = require('./routes/Application');
 const mediaRoutes = require('./routes/Media');

//middelwar thing to execute things while we enter an other page 
//partie image :


//import routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
// you can create routes
app.get('/apis', (req,res)=>{
    res.send('heyyy test home ')
}); 


//routes
app.use('/api/users', personRouter);

//ici les liens des routes :
app.use('/api/auth', authentificationRouter);
app.use('/api/profil', profilRouter);
app.use('/api/post', postRouter);
app.use('/api/share', shareRouter);
// app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );
 app.use('/api/video', videoRoutes);

 app.use('/api/application', applicationRoutes);
 app.use('/api/media', mediaRoutes);

//how to startl listen 
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname + '/front/index.html'))
});
app.listen(process.env.PORT || 3003);