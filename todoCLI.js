const fs = require('fs');
const readline = require('readline');
const logSymbols = require('log-symbols');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Welcome to Todo CLI! \n ----------------- \n (v) View ~ (n) New ~ (cX) Complete ~ (dX) Delete ~ (q) Quit \n ', function (data) {
    // to view file
    if ( data === 'v') {
        fs.readFile('./todolist.js',(err,task) => {
            if (err) throw err;
            console.log(task);
        })
    }
    // to add task to the file
    if (data === 'n') {

    }
    // to quit the readline module
    if (data === 'q') {
        rl.close()
    }
})