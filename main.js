const fs = require('fs');
const content = "This is the modified text. \n\nReading and Writing in a txt file is sucessfully done using JS!";
const appendText = "This is the appended text";

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Initial Reading.\n');
//     console.log(data);
// });

var readme1 = fs.readFileSync('test.txt', 'utf8');
console.log(readme1);

// fs.writeFile('test.txt', content, err => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('\nModifying the txt file.');
// });

fs.writeFileSync('test.txt', content);

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Reading before Appending.');
//     console.log(data);
// });

var readme2 = fs.readFileSync('test.txt', 'utf8');
console.log(readme2);

// fs.appendFile('test.txt', appendText, err => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('\nAppending the txt file.');
// });

fs.appendFileSync('test.txt', appendText);

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Reading after Appending.');
//     console.log(data);
// });

var readme3 = fs.readFileSync('test.txt', 'utf8');
console.log(readme3);

//For things to happen in the sequence you code, use read/write/appendFileSync. Else, use async(check out the commented code.)