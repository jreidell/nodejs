const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const hostname = 'localhost'; //'127.0.0.1';
const port  = '3000';

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
      console.log('hello');
    });

    greet();
    greet();

    // SET HEADER CONTENT TYPE
    res.setHeader('content-type', 'text/html');

    let viewPath = './views/';
    
    switch(req.url)
    {
        case '/':
            viewPath += 'index.html';
            break;
        case '/about':
            viewPath += 'about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            res.statusCode = 404;
            viewPath += '404.html';
            break;
    }

    fs.readFile(viewPath, (err, data) => {
        if(err) {
            res.statusCode = 500;
            res.end(err.message);
        } 
        else {
            res.end(data);
        }
    });
    
});

server.listen(port, hostname, () => {
    console.log(`Blog server listening on http://${hostname}:${port}/`);
});
