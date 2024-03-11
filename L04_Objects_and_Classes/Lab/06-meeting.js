function meeting(input) {
    let meetings = {};

    for (let line of input) {
        let [weekday, name] = line.split(" ");

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
            continue;
        }

        meetings[weekday] = name;
        console.log(`Scheduled for ${weekday}`);
    }

    for (let [weekday, name] of Object.entries(meetings)) {
        console.log(`${weekday} -> ${name}`);
    }
}

meeting([
    "Friday Bob",
    "Saturday Ted",
    "Monday Bill",
    "Monday John",
    "Wednesday George",
]);

// a function that manages meeting appointments. The input comes as an array
//  of strings. Each string contains a weekday and person’s name. For each successful
//  meeting, print a message. If you receive the same weekday twice, the meeting cannot
//  be scheduled so print a conflicting message. In the end, print a list of all
//   successful meetings.
