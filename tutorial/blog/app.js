const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);
app.disable('etag');

//connect to MongoDB
const dbURI = 'mongodb+srv://username:password:cluserUri.mongodb.net/node-tuts';

mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
    });

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/blogs', blogRoutes);

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Hoe to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];
    // res.render('index', { title: 'Home', blogs } );
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About Us' } );
});

//404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404 - Not Found' } );
});
