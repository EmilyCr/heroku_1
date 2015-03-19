//link to http
var http = require('http');
var url = require('url');

//start http server so we can run in browser
http.createServer(function(req, res) {
    
    //get the temperature from url - we need the true parameter to read the individual values
    var query = url.parse(req.url, true).query;
    
    //get the number in degrees celsius
    var celsius = query.celsius;
    
    //convert to an integer
    celsius = parseInt(celsius);
    
    //convert the tempurature into fahrenheit
    var farhenheit = (celsius*9/5) +32;
    
    //output to the browser
    res.write(celsius + ' degrees C equals ' + farhenheit + ' degrees F.');
    res.end(); 
   
    //output to the console
    console.log(celsius + ' degrees C equals ' + farhenheit + ' degrees F');
    
}).listen(1337);

console.log('Server is running on port 1337.');
