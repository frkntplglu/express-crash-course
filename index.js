// Basic Server Syntax

const express = require('express');

// Init express
const app = express();

// Create your endpoints/route handlers
app.get('/', (req, res) => {
    res.send('Hello World!');

    // Fetch from database
    // Load pages
    // Return JSON
    // Full access to request & response
})

// Listen on a port
app.listen(1773);


// Basic Route Handling
/*

app.get() , app.post() , app.put() , app.delete()

Access to params, query strings, url parts

Express has a router so we can store routes in seperate files and export

We can parse incoming data with the Body Parse

*/

// Middleware

/*

Middleware functions are functions that have access to the request and response object. Express has built in middleware but middleware also comes from 
3rd party packages as well as custom middleware

Execute anycode
Make changes to the request/response objects
End response cycle
Call next middleware in the stack

*/