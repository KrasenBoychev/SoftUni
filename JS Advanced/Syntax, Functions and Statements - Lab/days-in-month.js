function daysInMonth(m, y) {
    const numDays = new Date(y, m, 0).getDate();

    console.log(numDays);
}

daysInMonth(2, 2021);