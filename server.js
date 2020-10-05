const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
/* BTW */
/* start node server : most likely be used in deployment /
/* BTW */
const membersRouter = require('./routes/api/members')

// Init express
const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))


// Set a static folder
app.use(express.static(path.join(__dirname, 'public'))); // we set a static folder


app.use('/api/members', membersRouter) // It's enought to make a request from API


// Init middleware 
//app.use(logger); // Everytime we make a request to api, this middleware will run





/* // Create your endpoints/route handlers
app.get('/', (req, res) => { // This method depends on HTTP Request Type that you want to handle.
    //res.send('Hello World!!??!');

    res.sendFile(path.join(__dirname, 'public', 'index.html')) // rendering html file.


    // Fetch from database
    // Load pages
    // Return JSON
    // Full access to request & response
}) */

const PORT = process.env.PORT || 1773;

// Listen on a port
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port.`)
});