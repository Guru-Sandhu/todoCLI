const fs = require('fs');
const readline = require('readline');
const figures = require('figures');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

let storedList = [];

function mainScript() {
    rl.question('\nWelcome to Todo CLI! \n----------------------- \n(v) View ~ (n) New ~ (cX) Complete ~ (dX) Delete ~ (q) Quit \n\n', function (command) {
        //changing symbol to ellipses after each recursion
        let completeSymbol = figures.ellipsis;
        // to view file
        if ( command === 'v') {
            for (let task of storedList) {
                if (task.isCompleted){
                    console.log(`${storedList.indexOf(task)} [${figures.main.tick}] ${task.title}`);
                } else {
                    console.log(`${storedList.indexOf(task)} [] ${task.title}`);
                }
            }
            mainScript();
        }
        // to add task to the file
        if (command === 'n') {
            rl.question('What ? \n', (newTask) => {
                    storedList.push({isCompleted:false,title:newTask});
                mainScript();
            })
        }
        // to delete tasks from specific index
        if (command[0] === 'd') {
            if (command[1] !== -1) {
                storedList.splice(command[1], 1);
                console.log(`Deleted : ${storedList[command[1]].title}`);
            }
            mainScript();
        }
        // to mark a file as completed
        if (command[0] === 'c') {
            storedList[command[1]].isCompleted = true;
            console.log(`Completed : ${storedList[command[1]].title}`)
            mainScript()
        }
        // to quit the readline module
        if (command === 'q') {
            rl.close()
        }
    })
}
mainScript()