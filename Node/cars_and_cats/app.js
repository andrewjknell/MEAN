const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url === '/cars') {
        fs.readFile('views/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/form') {
        fs.readFile('views/form.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/stylesheets/style.css") {
        fs.readFile('./stylesheets/style.css', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('images/1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/2.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('images/2.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/3.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('images/3.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/4.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('images/4.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("listening on port 7077");