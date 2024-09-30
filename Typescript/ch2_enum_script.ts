// define value examples with enum
enum PermissonLevel {
    STUDENT = 'student', // if not equal sign, then the values are numbers
    INSTRUCTOR = 'instructor',
    ADMIN = 'admin',
}

interface User_e {
    name: string;
    age: number;
    courses: string[];
}

interface UserExtended extends User_e {
    permissionLevel: PermissonLevel; // another way is just 'student'|'instructor'|'admin'
}

const user3: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: PermissonLevel.INSTRUCTOR,
};

console.log(user3);

const user4: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: PermissonLevel.STUDENT,
};

console.log(user4);

function printUser(user: UserExtended) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

function printUserVerbose(user: User_e) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

printUser(user3);
