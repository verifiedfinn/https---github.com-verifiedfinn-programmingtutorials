// Import the built-in 'http' module
var http = require("http");


// Define a port number for the server to listen on
// The port can be any number between 0 and 65535, but it's common practice to use ports like 3000 or 8000.
const PORT = 3001;


// Create the server
var server = http.createServer((request, response) => {
  // Send a simple response to the client
  response.write("Helloooo");
  response.end();
});


// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);

  const express = require('express'); //required to use 'express' module that allows to template our pages
const path = require("path"); //required to use 'path' module that gets the current directory
const app = express(); //create an app from express
const port = 3000; //define our port number, this doesn’t have to be 3000

// Set up the 'views' directory for EJS templates
 app.set('views', path.join(__dirname, 'views'));
// Set EJS as the view engine
 app.set('view engine', 'ejs');

// Define a basic route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello, You\'ve reached your Appy!!!');
});


// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));

// Define a route for a specific URL ("/info") which renders the greetings.ejs page
app.get("/greeting/:greeting/:personName/:surname", (req, res) => {
    const greeting = req.params.greeting;
    const name = req.params.personName;
    const surname = req.params.surname;
    return res.render("greetings", {
        data: { greeting, name, surname },
    });

    
});

app.use(express.static("assets"));

app.get("/images/:imagename", (req, res) => {
    const imagename = req.params.imagename;
    return res.render("photos", {
        data: { imagename },
    });

    
});

});

