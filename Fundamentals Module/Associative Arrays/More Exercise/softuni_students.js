function students(input) {

    let courses = {};

    for (let command of input) {
        if (command.includes(`: `)) {
            let [courseName, capacity] = command.split(`: `);
            capacity = Number(capacity);

            if (courseName in courses) {
                courses[courseName].capacity += capacity;
            } else {
                courses[courseName] = {capacity: capacity, students: []};
            }

        } else {
            let [userInfo, courseName] = command.split(` joins `);
            if (courseName in courses) {
                if (courses[courseName].capacity > 0) {
                    let [usernameAndCredits, email] = userInfo.split(` with email `);
                    let [username, creditsStr] = usernameAndCredits.split(`[`);
                    let credits = creditsStr.slice(0, creditsStr.length - 1);
                    courses[courseName].students.push([Number(credits), username, email]);
                    courses[courseName].capacity -= 1;
                }
            }
        }
    }

    let sortedCourses = Object.entries(courses)
        .sort((a, b) => b[1].students.length - a[1].students.length);

    sortedCourses.forEach(course => {
        console.log(`${course[0]}: ${course[1].capacity} places left`);

        let sortedStudents = course[1].students.sort((a, b) => b[0] - a[0]);
        for (const student of sortedStudents) {  
            console.log(`--- ${student[0]}: ${student[1]}, ${student[2]}`);
        }
    });
    
}
// students(['JavaBasics: 2', 
//           'user1[25] with email user1@user.com joins C#Basics', 
//           'C#Advanced: 3', 
//           'JSCore: 4', 
//           'user2[30] with email user2@user.com joins C#Basics', 
//           'user13[50] with email user13@user.com joins JSCore', 
//           'user1[25] with email user1@user.com joins JSCore', 
//           'user8[18] with email user8@user.com joins C#Advanced',
//           'user6[85] with email user6@user.com joins JSCore', 
//           'JSCore: 2', 
//           'user11[3] with email user11@user.com joins JavaBasics', 
//           'user45[105] with email user45@user.com joins JSCore', 
//           'user007[20] with email user007@user.com joins JSCore', 
//           'user700[29] with email user700@user.com joins JSCore', 
//           'user900[88] with email user900@user.com joins JSCore']);

students(['JavaBasics: 15',
          'user1[26] with email user1@user.com joins JavaBasics',
          'user2[36] with email user11@user.com joins JavaBasics',
          'JavaBasics: 5',
          'C#Advanced: 5',
          'user1[26] with email user1@user.com joins C#Advanced',
          'user2[36] with email user11@user.com joins C#Advanced',
          'user3[6] with email user3@user.com joins C#Advanced',
          'C#Advanced: 1',
          'JSCore: 8',
          'user23[62] with email user23@user.com joins JSCore']);