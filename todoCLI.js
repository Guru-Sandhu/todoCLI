const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

console.log('\nWelcome to Todo CLI! \n----------------------- ');

let storedList = [];

function mainScript() {
    rl.question('\n(v) View \u23FA (n) New \u23FA (cX) Complete \u23FA (dX) Delete \u23FA (q) Quit \n\n>', function (command) {
        // to view file
        if ( command === 'v') {
            if (storedList.length === 0) {
                console.log('List is Empty...')
            } else {
                for (let task of storedList) {
                    if (task.isCompleted){
                        console.log(`${storedList.indexOf(task)} [\u2714] ${task.title}`);
                    } else {
                        console.log(`${storedList.indexOf(task)} [] ${task.title}`);
                    }
                }
            }
            mainScript();
        } else if (command === 'n') {
            rl.question('\nWhat ? \n\n>', (newTask) => {
                    storedList.push({isCompleted:false,title:newTask});
                mainScript();
            })
        } else if (command[0] === 'd') {
            if (command.length === 1) {
                console.log('Please Try Again using Index')
            } else {
                console.log(`Deleted : "${storedList[command[1]].title}"`);
                storedList.splice(command[1], 1);
            }
            mainScript();
        } else if (command[0] === 'c') {
            if (command.length === 1 ) {
                console.log('Please Try Again using Index')
            } else {
                console.log(`Completed : "${storedList[command[1]].title}"`)
                storedList[command[1]].isCompleted = true;
            }
            mainScript()
        } else if (command === 'q') {
            console.log('See you soon! 😄')
            rl.close()
        } else {
            console.log('Wrong Command or Type Error ... Please Try Again')
            mainScript();
        }
    })
}
mainScript()