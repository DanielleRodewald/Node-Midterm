var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/":
            return fs.readFile(__dirname + "/index.html", function (error, data) {

                if (error) throw error;
                res.writeHead(200, { "Content-type": "text/html" })
                res.end(data);
            });
        default:
            res.writeHead(404);
            res.write("Route not found");
            res.end();

    }

};

// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});

