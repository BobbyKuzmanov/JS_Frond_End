function manageSprintBoard(commands) {
    const n = parseInt(commands[0], 10);
    const tasks = {};

    for (let i = 1; i <= n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = commands[i].split(':');
        if (!tasks[assignee]) {
            tasks[assignee] = [];
        }
        tasks[assignee].push({
            taskId,
            title,
            status,
            points: parseInt(estimatedPoints, 10)
        });
    }

    for (let i = n + 1; i < commands.length; i++) {
        const parts = commands[i].split(':');
        const command = parts[0];
        const assignee = parts[1];

        switch (command) {
            case 'Add New': {
                const taskId = parts[2];
                const title = parts[3];
                const status = parts[4];
                const estimatedPoints = parts[5];
                if (tasks[assignee]) {
                    tasks[assignee].push({
                        taskId,
                        title,
                        status,
                        points: parseInt(estimatedPoints, 10)
                    });
                } else {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                }
                break;
            }
            case 'Change Status': {
                const taskId = parts[2];
                const newStatus = parts[3];
                let taskFound = false;
                if (tasks[assignee]) {
                    tasks[assignee].forEach(task => {
                        if (task.taskId === taskId) {
                            task.status = newStatus;
                            taskFound = true;
                        }
                    });
                    if (!taskFound) {
                        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    }
                } else {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                }
                break;
            }
            case 'Remove Task': {
                const index = parseInt(parts[2], 10);
                if (tasks[assignee]) {
                    if (index >= 0 && index < tasks[assignee].length) {
                        tasks[assignee].splice(index, 1);
                    } else {
                        console.log("Index is out of range!");
                    }
                } else {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                }
                break;
            }
            default:
                console.log(`Unknown command: ${command}`);
                break;
        }
    }

    const statusTotals = { 'ToDo': 0, 'In Progress': 0, 'Code Review': 0, 'Done': 0 };
    Object.values(tasks).forEach(assigneeTasks => {
        assigneeTasks.forEach(task => {
            statusTotals[task.status] += task.points;
        });
    });

    console.log(`ToDo: ${statusTotals['ToDo']}pts`);
    console.log(`In Progress: ${statusTotals['In Progress']}pts`);
    console.log(`Code Review: ${statusTotals['Code Review']}pts`);
    console.log(`Done Points: ${statusTotals['Done']}pts`);

    // Check if the sprint was successful
    const donePoints = statusTotals['Done'];
    const otherPoints = statusTotals['ToDo'] + statusTotals['In Progress'] + statusTotals['Code Review'];
    if (donePoints >= otherPoints) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
}


// Example usage:
// manageSprintBoard([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:0',
// ]);


manageSprintBoard([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done'
]);
