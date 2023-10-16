const fs = require('fs');

//read stream object
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

//write stream object
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//write stream object
const writeStream2 = fs.createWriteStream('./docs/blog5.txt');

readStream.on('data', (chunk) => {
    console.log('\n----- NEW CHUNK----\n');
    console.log(chunk);
    writeStream.write('\n----- NEW CHUNK----\n');
    writeStream.write(chunk)
});

//piping
readStream.pipe(writeStream2);
