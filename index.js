require('dotenv').config()
require('colors')
const readline = require('readline-sync')

const {
    getName,
    getBalance,
    getPosition,
    getUID,
    getTask,
    clearAllTask
} = require('./src/api')

const {
    displayHeader,
    tableUser
} = require('./src/ui')

const TOKENS = [
    process.env.QUERY_ID_1,
    process.env.QUERY_ID_2,
    process.env.QUERY_ID_3
]

async function main() {
    displayHeader()

    const data = []
    const userData = []

    for (let i = 0; i < TOKENS.length; i++) {
        const token = TOKENS[i];
        const uid = await getUID(token);
        const name = await getName(token);
        const position = await getPosition(token);
        const balance = await getBalance(token);

        userData.push({ uid, token })

        data.push([i + 1, uid, name, position, balance])
    }

    tableUser(data)

    const selectedIndex = readline.question('\n✨ Select account number to run claim tasks: '.white.bold)
    const selectedUser = userData[selectedIndex - 1]

    if (selectedUser) {
        console.log(`\n⚙️  Running claim tasks for UID: ${selectedUser.uid}\n`.white.bold);

        const tasks = await getTask(selectedUser.token)
        if (tasks.length > 0) {
            for (const task of tasks) {
                await clearAllTask(selectedUser.token, task)
            }
            console.log(`\n✅ All tasks for UID ${selectedUser.uid} have been completed.`)
        } else {
            console.log('\n🚫 No tasks available for this UID.')
        }
    } else {
        console.log('\n❌ Invalid selection! Please try again.')
    }
}

main()
