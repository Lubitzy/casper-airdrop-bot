const colors = require('colors')
const Tabel = require('cli-table3')

function displayHeader() {
    console.clear();
    console.log('=========================================='.brightWhite)
    console.log('|       ✨ CSPR.fans Airdrop Bot ✨      |'.brightWhite.bold)
    console.log('=========================================='.brightWhite)
    console.log('|            Created by Lubitzy          |'.brightWhite.bold)
    console.log('|       Telegram: https://t.me/lubiqt    |'.brightWhite.bold)
    console.log('=========================================='.brightWhite)
    console.log();
}

function tableUser(data) {
    const table = new Tabel({
        head: ['No.'.white.bold, 'UID Telegram'.white.bold, 'Username'.white.bold, 'Position'.white.bold, 'Balance'.white.bold],
        colWidths: [5, 20, 20, 20, 20]
    })

    data.forEach(row => {
        table.push(row)
    })

    console.log(table.toString())
}

module.exports = {
    displayHeader,
    tableUser
}