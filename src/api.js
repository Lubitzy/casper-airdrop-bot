const axios = require('axios')

async function getUID(token) {
    const response = await axios({
        url: 'https://api2.cspr.community/api/users/me',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data.user.telegram_uid
}

async function getPosition(token) {
    const response = await axios({
        url: 'https://api2.cspr.community/api/airdrop-info?leaderboard_offset=0&leaderboard_limit=3',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data.ranking.user_rank.position
}

async function getName(token) {
    const response = await axios({
        url: 'https://api2.cspr.community/api/users/me',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data.user.username
}

async function getBalance(token) {
    const response = await axios({
        url: 'https://api2.cspr.community/api/users/me/tasks',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data.balances[0].balance
}

async function getTask(token) {
    try {
        const { data } = await axios({
            url: 'https://api2.cspr.community/api/users/me/tasks',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        });

        const priorityTasks = data.tasks.priority.map(task => task.task_name)
        const dailyTasks = data.tasks.daily.map(task => task.task_name)

        const taskNames = [...priorityTasks, ...dailyTasks]

        return taskNames;
    } catch (error) {
        console.log('⚠️ Error fetching tasks:', error)
        return []
    }
}

async function clearAllTask(token, task_name) {
    try {
        await axios({
            url: 'https://api2.cspr.community/api/users/me/tasks',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: {
                task_name: task_name,
                action: 0
            }
        });

        await new Promise(resolve => setTimeout(resolve, 20000))
        const { data } = await axios({
            url: 'https://api2.cspr.community/api/users/me/tasks',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: {
                task_name: task_name,
                action: 1
            }
        });
        console.log(`✅ Task "${task_name}" has been claimed`.green)
        return data
    } catch (error) {
        if (error.response && error.response.data.error.message === 'Task already claimed') {
            console.log(`🚫 Task "${task_name}" error: Task has already been claimed`.bold)
        } else {
            console.log(`🚫 Task "${task_name}" error: please clear task manually`)
        }
    }
}

module.exports = {
    getName,
    getBalance,
    getPosition,
    getUID,
    getTask,
    clearAllTask
}
