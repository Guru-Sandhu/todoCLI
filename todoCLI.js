const fs = require('fs');
const readline = require('readline');
const logSymbols = require('log-symbols');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

let storedList = [];

function mainScript() {
    rl.question('Welcome to Todo CLI! \n ----------------- \n (v) View ~ (n) New ~ (cX) Complete ~ (dX) Delete ~ (q) Quit \n ', function (command) {
        // to view file
        if ( command === 'v') {
            for (let task of storedList) {
                console.log(`${task}`);
            }
            console.log('\n');
            mainScript();
        }
        // to add task to the file
        if (command === 'n') {
            rl.question('What ? \n', (newTask) => {
                    storedList.push(newTask);
                mainScript();
            })
        }
        // to delete tasks from specific index
        if (command[0] === 'd') {
            if (command[1] !== -1) {
                console.log(storedList.splice(command[1], 1));
            }  
            mainScript();
        }
        // to quit the readline module
        if (command === 'q') {
            rl.close()
        }
    })
}
mainScript()