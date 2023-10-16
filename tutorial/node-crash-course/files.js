const fs = require('fs');

// reading files
// fs.readFile('./docs/blog2.txt', (err, data) => {
//     //callback
//     if(err) {
//         console.log(err);
//     }

//     console.log(data.toString());

// });

// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'This is the text I am writing to Blog 1', () => {
//     //callback
//     console.log('file 1 was written');
// });

// fs.writeFile('./docs/blog2.txt', 'This is the text I am writing to Blog 2', () => {
//     //callback
//     console.log('file 2 was written');
// });

// fs.appendFile('./docs/blog1.txt', '\nHere is the next line', () => {
//     //callback
//     console.log('file 1 was appended');
// });


// directories
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log('folder created');
//         }
//     });
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log('folder removed');
//         }
//     });
// }

// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('file deleted');
        }
    });
}
else{
    fs.writeFile('./docs/deleteme.txt', 'delete me', () => {
        //callback
        console.log('deleteme.txt was created');
    });
}
