const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger')
/* BTW */
/* start node server : most likely be used in deployment /
/* BTW */
// For showing on frontend with handlebars
const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    }
]



const membersRouter = require('./routes/api/members')

// Init express
const app = express();


// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'})); // it can be read from documentation
app.set('view engine', 'handlebars'); 



// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Homepage Rout
app.get('/', (req, res) => {
    res.render('index',{
        title: 'Member App',
        members: members
    })
})


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