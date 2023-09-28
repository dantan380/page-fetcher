const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
    let fileSize = body.length;
    fs.writeFile(args[1], body, err => {
        if (err) {
            console.error(err);
        };
        console.log(`Downloaded and saved ${fileSize} bytes to ${args[1]}`)
    })
});
