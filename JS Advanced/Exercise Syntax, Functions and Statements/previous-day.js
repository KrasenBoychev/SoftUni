function previousDay(year, month, day) {
    let today = new Date(year, month-1, day);

    let yesterday = new Date(today.setDate(today.getDate() - 1));

    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`);
}

previousDay(2015, 1, 1);