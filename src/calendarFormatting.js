const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];


const months = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", 
    "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
];


function getDayString(index) {
    return days[index];
}

function getMonthString(index) {
    return months[index];
}

export { getDayString, getMonthString };