// app.js
import express from "express";
import path from 'path';

const app = express();
const port = 3000;

// Set the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(new URL('.', import.meta.url).pathname, 'views'));

// Your routes and other configurations go here...

app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs'); // Ensure the correct view name is used here
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
